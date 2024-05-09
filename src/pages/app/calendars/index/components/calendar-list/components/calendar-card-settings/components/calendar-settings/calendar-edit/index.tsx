import { getAllCalendarsGroup } from "@api/calendars/get-all-calendars";
import { putUpdateCalendar } from "@api/calendars/update-calendar";
import type { PutUpdateCalendarParams } from "@api/calendars/update-calendar/types.ts";
// import { MAX_BG_IMAGE_SIZE } from "@/consts.ts";
import { DialogSection } from "@components/dialog-section";
// import { ImagePicker } from "@components/image-picker";
import { Button } from "@components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@hooks/use-auth";
import { useCalendar } from "@hooks/use-calendar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { editCalendarSchema } from "./schemas.ts";
import type { CalendarEditProps, EditCalendarValues } from "./types.ts";

const CalendarEdit: React.FC<CalendarEditProps> = () => {
	// const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const { calendar } = useCalendar();

	const { t } = useTranslation("appCalendars");
	const { currentUser } = useAuth();
	const form = useForm<EditCalendarValues>({
		resolver: zodResolver(editCalendarSchema),
		defaultValues: {
			// calendarImage: undefined,
			calendarName: calendar.summary,
		},
	});

	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: ({ calendarId, requestData }: PutUpdateCalendarParams) => {
			return putUpdateCalendar({ calendarId, requestData });
		},
		onSuccess: (data) => {
			const queryData = queryClient.getQueryData(
				getAllCalendarsGroup().queryKey,
			);

			if (!queryData || !data) return;
			toast.success(t("content.card.modal.settings.edit.toast.title"), {
				description: t("content.card.modal.settings.edit.toast.label"),
			});

			const freshData = queryData.map((item) => {
				if (item.id !== data.id) return item;
				return {
					...item,
					summary: data.summary,
				};
			});

			return queryClient.setQueryData(
				getAllCalendarsGroup().queryKey,
				freshData,
			);
		},
		meta: {
			shouldBeHandledByGlobalSuccessHandler: false,
		},
	});

	// useEffect(() => {
	// 	if (!contentOpen) {
	// 		// setSelectedImage(null);
	// 		// form.control._reset();
	// 	}
	// }, [contentOpen, form.control._reset]);

	const onSubmit = async (formValues: EditCalendarValues) => {
		if (formValues.calendarName === calendar.summary) return;
		form.control._disableForm(true);

		mutate(
			{
				calendarId: `${calendar.id}`,
				requestData: {
					summary: formValues.calendarName,
				},
			},
			{
				onSettled: () => {
					form.control._disableForm(false);
					// form.control._reset();
				},
			},
		);
	};

	const participant = useMemo(() => {
		return calendar.participants.find((item) => item.id === currentUser?.id);
	}, [calendar.participants, currentUser?.id]);

	useEffect(() => {
		form.control._disableForm(
			participant?.role !== "admin" && participant?.role !== "owner",
		);
	}, [participant?.role, form.control._disableForm]);

	return (
		<DialogSection title={t("content.card.modal.settings.edit.title")}>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className={"flex flex-col gap-y-7 px-3 py-2"}
				>
					<div className={"flex flex-col gap-y-3"}>
						<FormField
							control={form.control}
							name={"calendarName"}
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t(
											"content.card.modal.settings.edit.form.titleInput.label",
										)}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"content.card.modal.settings.edit.form.titleInput.placeholder",
											)}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/*<FormField*/}
						{/*	control={form.control}*/}
						{/*	name={"calendarImage"}*/}
						{/*	render={({*/}
						{/*		field: { disabled, value, onChange, ...fieldProps },*/}
						{/*	}) => (*/}
						{/*		<FormItem>*/}
						{/*			<ImagePicker*/}
						{/*				maxFileSize={MAX_BG_IMAGE_SIZE}*/}
						{/*				disabled={disabled}*/}
						{/*				selectedImage={selectedImage}*/}
						{/*				deleteSelectedImage={() => {*/}
						{/*					onChange(null);*/}
						{/*					setSelectedImage(null);*/}
						{/*				}}*/}
						{/*				currentImage={{*/}
						{/*					image: "https://github.com/shadcn.png",*/}
						{/*					deleteImage: () => {},*/}
						{/*				}}*/}
						{/*			/>*/}
						{/*			<FormControl>*/}
						{/*				<Input*/}
						{/*					accept="image/png, image/jpeg, image/webp"*/}
						{/*					type={"file"}*/}
						{/*					className={"hidden"}*/}
						{/*					onChange={(e) => {*/}
						{/*						onChange(e.target.files?.[0] || null);*/}
						{/*						setSelectedImage(e.target.files?.[0] || null);*/}
						{/*					}}*/}
						{/*					disabled={disabled}*/}
						{/*					{...fieldProps}*/}
						{/*				/>*/}
						{/*			</FormControl>*/}
						{/*			<FormMessage />*/}
						{/*		</FormItem>*/}
						{/*	)}*/}
						{/*/>*/}
					</div>

					<Button
						onClick={() => form.handleSubmit(onSubmit)}
						disabled={
							form.control._formState.disabled ||
							(participant?.role !== "admin" && participant?.role !== "owner")
						}
						type="submit"
						className={"self-center max-w-40 w-full"}
					>
						{t("content.card.modal.settings.edit.form.submit")}
					</Button>
				</form>
			</Form>
		</DialogSection>
	);
};

export { CalendarEdit };
