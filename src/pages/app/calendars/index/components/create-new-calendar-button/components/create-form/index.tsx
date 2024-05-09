import { postCreateCalendar } from "@api/calendars/create-calendar";
// import { MAX_BG_IMAGE_SIZE } from "@/consts.ts";
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
import type { CreateFormProps } from "@pages/app/calendars/index/components/create-new-calendar-button/components/create-form/types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { addCalendarSchema } from "./schemas.ts";
import type { AddCalendarValues } from "./types.ts";

const CreateForm: React.FC<CreateFormProps> = ({
	contentOpen,
	setContentOpen,
}) => {
	// const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const { t } = useTranslation("appCalendars");
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: (formValues: AddCalendarValues) => {
			return postCreateCalendar({ summary: formValues.calendarName });
		},
		meta: {
			shouldBeHandledByGlobalSuccessHandler: false,
		},
	});

	const form = useForm<AddCalendarValues>({
		resolver: zodResolver(addCalendarSchema),
		defaultValues: {
			// calendarImage: undefined,
			calendarName: "",
		},
	});

	useEffect(() => {
		if (!contentOpen) {
			// setSelectedImage(null);
			form.control._reset();
		}
	}, [contentOpen, form.control._reset]);

	const onSubmit = async (formValues: AddCalendarValues) => {
		form.control._disableForm(true);

		mutate(formValues, {
			onSuccess: () => {
				toast.success(t("content.createNewCalendar.modal.toast.title"), {
					description: t("content.createNewCalendar.modal.toast.label"),
				});
				return queryClient.invalidateQueries({ queryKey: ["all-calendars"] });
			},
			onSettled: () => {
				form.control._disableForm(false);

				setContentOpen(false);
			},
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={"flex flex-col gap-y-12"}
			>
				<div className={"flex flex-col gap-y-3"}>
					<FormField
						control={form.control}
						name={"calendarName"}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									{t("content.createNewCalendar.modal.form.titleInput.label")}
								</FormLabel>
								<FormControl>
									<Input
										placeholder={t(
											"content.createNewCalendar.modal.form.titleInput.placeholder",
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

				<Button disabled={form.control._formState.disabled} type="submit">
					{t("content.createNewCalendar.modal.form.submit")}
				</Button>
			</form>
		</Form>
	);
};

export { CreateForm };
