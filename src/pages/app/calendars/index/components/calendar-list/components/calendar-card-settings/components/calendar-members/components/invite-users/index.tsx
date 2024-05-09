import { postAddParticipants } from "@api/calendars/add-participants";
import type { AddParticipantsParams } from "@api/calendars/add-participants/types.ts";
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
import { useCalendar } from "@hooks/use-calendar";
import { emailsSchema } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members/components/invite-users/schemas.ts";
import type { EmailsFormData } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members/components/invite-users/types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";

// ! TODO: optimize, make reusable?

const InviteUsers: React.FC = () => {
	const { calendar } = useCalendar();
	const { t } = useTranslation("appCalendars");
	const form = useForm<EmailsFormData>({
		resolver: zodResolver(emailsSchema),
		defaultValues: {
			emails: [],
		},
	});
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: ({ calendarId, requestData }: AddParticipantsParams) =>
			postAddParticipants({ calendarId, requestData }),
		onSuccess: () => {
			return queryClient.invalidateQueries({ queryKey: ["all-calendars"] });
		},
	});

	const [emails, setEmails] = useState<EmailsFormData["emails"]>([]);
	const [value, setValue] = useState("");

	const onSubmit = async (formValues: EmailsFormData) => {
		form.control._disableForm(true);

		mutate(
			{
				calendarId: `${calendar.id}`,
				requestData: {
					participants: formValues.emails,
				},
			},
			{
				onSettled: () => {
					form.control._disableForm(false);
					form.control._reset();
					setEmails([]);
					setValue("");
				},
			},
		);
	};

	const addEmail = (value: string) => {
		emailsSchema
			.safeParseAsync({ emails: [...emails, value] })
			.then((data) => {
				if (!data.success) throw data.error;
				const emailsArray = data.data.emails;
				setEmails(emailsArray);
				setValue("");
				form.setValue("emails", emailsArray, {
					shouldValidate: true,
				});
			})
			.catch((e) => {
				form.setError("emails", {
					message: e.issues[0].message,
				});
			});
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className={"flex flex-col gap-y-5"}
				>
					<FormField
						control={form.control}
						name={"emails"}
						render={({ field: { value: val, onChange, ...fieldProps } }) => (
							<FormItem className={"relative"}>
								<div className={"flex flex-row gap-2 my-2"}>
									{emails.map((email) => {
										return (
											<div
												key={email}
												className={
													"bg-muted w-max p-2 px-3 text-xs rounded-md flex flex-row justify-center items-center gap-x-2"
												}
											>
												{email}
												<Button
													type={"button"}
													variant={"accentGhost"}
													className={"size-fit p-1"}
													onClick={() => {
														setEmails((prevState) => {
															return prevState.filter((item) => item !== email);
														});
													}}
												>
													<X size={12} />
												</Button>
											</div>
										);
									})}
								</div>

								<FormLabel>
									{t("content.card.modal.members.invite.input.label")}
								</FormLabel>
								<Button
									onClick={() => {
										addEmail(value);
									}}
									type={"button"}
									className={
										"absolute bottom-1.5 right-1  p-2 size-fit xs:hidden"
									}
									variant={"accentGhost"}
								>
									<FaChevronRight size={13} />
								</Button>
								<FormControl>
									<Input
										className={"pr-10"}
										value={value}
										onChange={(e) => setValue(e.target.value)}
										placeholder={t(
											"content.card.modal.members.invite.input.placeholder",
										)}
										{...fieldProps}
										onKeyDownCapture={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
												const value = (e.target as HTMLInputElement).value;
												addEmail(value);
											}
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button>{t("content.card.modal.members.invite.inviteButton")}</Button>
				</form>
			</Form>
		</>
	);
};

export { InviteUsers };
