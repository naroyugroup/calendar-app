import { DAYJS_DATE_FORMAT, DAYJS_UTC_FORMAT } from "@/consts.ts";
import { postCreateEvent } from "@api/calendar-events/create-event";
import type { PostCreateEventParams } from "@api/calendar-events/create-event/types.ts";
import { putModifyEvent } from "@api/calendar-events/modify-event";
import type { PutModifyEventParams } from "@api/calendar-events/modify-event/types.ts";
import { CustomInput } from "@components/custom-input";
import { Button } from "@components/ui/button";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@hooks/use-auth";
import { useFullPageCalendar } from "@hooks/use-full-page-calendar";
import { AllDayCheckbox } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/all-day-checkbox";
import { AttendeeList } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/attendee-list";
import { DateTimeSelection } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/date-time-selection";
import { DeleteEventButton } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/delete-event-button";
import { MobileAddAttendeeButton } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/mobile-add-attendee-button";
import { RecurrenceSelect } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/recurrence-select";
import {
	attendeesSchema,
	eventSchema,
} from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/schema.ts";
import type { EventFormData } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/types.ts";
import type { SelectedDateTime } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/types.ts";
import { AuthForm } from "@pages/auth/components/auth-form";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { Separator } from "@radix-ui/react-separator";
import { calendarIdRoute } from "@router/routes.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ModalContent: React.FC = () => {
	const { selectedDay, setDialogOpen, selectedEvent, dialogOpen } =
		useFullPageCalendar();
	const [recurrenceRule, setRecurrenceRule] = useState<string | undefined>(
		selectedEvent?.recurrenceRule || undefined,
	);
	const [attendees, setAttendees] = useState<string[]>([]);
	const [valueAttendee, setAttendeeValue] = useState("");

	const setDateTime = useCallback(
		(mode: "start" | "end") => {
			if (mode === "start" && selectedEvent?.period.startDateTime) {
				return dayjs(selectedEvent.period.startDateTime);
			}

			if (mode === "end" && selectedEvent?.period.endDateTime) {
				return dayjs(selectedEvent.period.endDateTime);
			}

			return selectedDay;
		},
		[selectedEvent, selectedDay],
	);

	const [selectedDateTime, setSelectedDateTime] = useState<SelectedDateTime>({
		pickedDate: selectedDay,
		startDateTime: setDateTime("start"),
		startTimeZone:
			selectedEvent?.period.startTimezone ||
			Intl.DateTimeFormat().resolvedOptions().timeZone,
		endDateTime: setDateTime("end"),
		endTimeZone:
			selectedEvent?.period.endTimezone ||
			Intl.DateTimeFormat().resolvedOptions().timeZone,
	});

	const [isAllDayEvent, setIsAllDayEvent] = useState<CheckedState>(
		!selectedEvent?.period.startDateTime,
	);

	const { t } = useTranslation("appCalendarId");
	const { id } = calendarIdRoute.useParams();
	const { currentUser } = useAuth();

	const { control, handleSubmit, setValue, setError, formState } =
		useForm<EventFormData>({
			resolver: zodResolver(eventSchema),
			defaultValues: {
				summary: "",
				description: "",
				location: "",
				attendee: undefined,
			},
		});

	const { mutate: mutateCreateEvent } = useMutation({
		mutationFn: ({ calendarId, requestData }: PostCreateEventParams) => {
			return postCreateEvent({ calendarId, requestData });
		},

		onSuccess: () => {
			setDialogOpen(false);
			control._reset();
			return queryClient.invalidateQueries({
				queryKey: ["events-by-range"],
			});
		},
		onSettled: () => {
			control._disableForm(false);
		},
	});

	const { mutate: mutateModifyEvent } = useMutation({
		mutationFn: ({
			eventId,
			calendarId,
			requestData,
		}: PutModifyEventParams) => {
			return putModifyEvent({ eventId, calendarId, requestData });
		},

		onSuccess: () => {
			setDialogOpen(false);
			control._reset();
			return queryClient.invalidateQueries({
				queryKey: ["events-by-range"],
			});
		},
		onSettled: () => {
			control._disableForm(false);
		},
	});

	useEffect(() => {
		if (dialogOpen) {
			setValue("summary", selectedEvent?.summary || "");
			setValue("description", selectedEvent?.description || "");
			setValue("location", selectedEvent?.location || "");
			setAttendees(selectedEvent?.attendee || []);

			setSelectedDateTime({
				pickedDate: selectedDay,
				startDateTime: setDateTime("start"),
				startTimeZone:
					selectedEvent?.period.startTimezone ||
					Intl.DateTimeFormat().resolvedOptions().timeZone,
				endDateTime: setDateTime("end"),
				endTimeZone:
					selectedEvent?.period.endTimezone ||
					Intl.DateTimeFormat().resolvedOptions().timeZone,
			});

			setIsAllDayEvent(!selectedEvent?.period.startDateTime);

			setRecurrenceRule(selectedEvent?.recurrenceRule || undefined);
		}
	}, [dialogOpen, setValue, selectedEvent, selectedDay, setDateTime]);

	const addAttendee = (value: string) => {
		attendeesSchema
			.safeParseAsync({ attendee: [...attendees, value] })
			.then((data) => {
				if (!data.success) throw data.error;
				const emailsArray = data.data.attendee;
				setAttendees(emailsArray);
				setAttendeeValue("");
				setValue("attendee", emailsArray, {
					shouldValidate: true,
				});
			})
			.catch((e) => {
				setError("attendee", {
					message: e.issues[0].message,
				});
			});
	};

	const queryClient = useQueryClient();
	const onSubmit = async (formValues: EventFormData) => {
		control._disableForm(true);

		if (selectedEvent) {
			console.log(selectedEvent);
			console.log(recurrenceRule);
			mutateModifyEvent({
				eventId: selectedEvent.period.eventId,
				calendarId: `${selectedEvent.calendarId}`,
				requestData: {
					summary: formValues.summary,
					creator: selectedEvent.creator,
					organizer: selectedEvent.organizer,
					description: formValues.description || selectedEvent.description,
					location: formValues.location || selectedEvent.location,
					recurrenceRule: recurrenceRule,
					attendee: formValues.attendee || selectedEvent.attendee,
					period: {
						startDateTime: !isAllDayEvent
							? `${selectedDateTime.startDateTime
									.utc()
									.format(DAYJS_UTC_FORMAT)}Z`
							: undefined,
						startTimezone: !isAllDayEvent
							? selectedDateTime.startTimeZone
							: undefined,
						endDateTime: !isAllDayEvent
							? `${selectedDateTime.endDateTime
									.utc()
									.format(DAYJS_UTC_FORMAT)}Z`
							: undefined,
						endTimezone: !isAllDayEvent
							? selectedDateTime.endTimeZone
							: undefined,
						startDate: selectedDateTime.pickedDate.format(DAYJS_DATE_FORMAT),
						endDate: selectedDateTime.pickedDate.format(DAYJS_DATE_FORMAT),
					},
				},
			});
		} else {
			mutateCreateEvent({
				calendarId: id,
				requestData: {
					summary: formValues.summary,
					creator: currentUser?.email || "",
					organizer: currentUser?.email || "",
					description: formValues.description || undefined,
					location: formValues.location || undefined,
					recurrenceRule: recurrenceRule,
					attendee: formValues.attendee,
					period: {
						startDateTime: !isAllDayEvent
							? `${selectedDateTime.startDateTime
									.utc()
									.format(DAYJS_UTC_FORMAT)}Z`
							: undefined,
						startTimezone: !isAllDayEvent
							? selectedDateTime.startTimeZone
							: undefined,
						endDateTime: !isAllDayEvent
							? `${selectedDateTime.endDateTime
									.utc()
									.format(DAYJS_UTC_FORMAT)}Z`
							: undefined,
						endTimezone: !isAllDayEvent
							? selectedDateTime.endTimeZone
							: undefined,
						startDate: selectedDateTime.pickedDate.format(DAYJS_DATE_FORMAT),
						endDate: selectedDateTime.pickedDate.format(DAYJS_DATE_FORMAT),
					},
				},
			});
		}
	};

	return (
		<DialogContent
			className={"flex flex-col xs:max-w-[unset] xs:max-h-[unset] w-3/4 h-3/4"}
		>
			<div className={"flex-row flex items-center gap-x-10"}>
				<DialogHeader>
					<DialogTitle>
						{selectedEvent
							? t("eventModal.modify.title")
							: t("eventModal.create.title")}
					</DialogTitle>
					<DialogDescription>
						{selectedEvent
							? t("eventModal.modify.description")
							: t("eventModal.create.description")}
					</DialogDescription>
				</DialogHeader>
				{selectedEvent && (
					<DeleteEventButton
						disabled={formState.disabled}
						disableForm={control._disableForm}
					/>
				)}
			</div>

			<div>
				<p className={"capitalize"}>
					{selectedDateTime.pickedDate.format("dddd, MMMM DD")}
				</p>
			</div>

			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name={"summary"}
					render={({ field: { ...fieldProps }, fieldState: { error } }) => (
						<CustomInput
							autoFocus
							type={"text"}
							label={t("eventModal.form.summary.title")}
							placeholder={t("eventModal.form.summary.placeholder")}
							errorMessage={error?.message}
							{...fieldProps}
						/>
					)}
				/>

				<div className={"flex flex-row gap-x-5"}>
					<AllDayCheckbox
						disabled={formState.disabled}
						isAllDayEvent={isAllDayEvent}
						setIsAllDayEvent={setIsAllDayEvent}
					/>
					<RecurrenceSelect
						disabled={formState.disabled}
						recurrenceRule={recurrenceRule}
						setRecurrenceRule={setRecurrenceRule}
					/>
				</div>

				<DateTimeSelection
					disabled={formState.disabled}
					selectedDateTime={selectedDateTime}
					setSelectedDateTime={setSelectedDateTime}
					isAllDayEvent={isAllDayEvent}
				/>

				<div>
					<p>{t("eventModal.form.details.title")}</p>
					<Separator className={"h-[0.01rem] dark:bg-zinc-900 bg-zinc-500"} />
				</div>

				<Controller
					control={control}
					name={"description"}
					render={({ field: { ...fieldProps }, fieldState: { error } }) => (
						<CustomInput
							type={"text"}
							label={t("eventModal.form.details.description.title")}
							placeholder={t("eventModal.form.details.description.placeholder")}
							errorMessage={error?.message}
							{...fieldProps}
						/>
					)}
				/>

				<Controller
					control={control}
					name={"location"}
					render={({ field: { ...fieldProps }, fieldState: { error } }) => (
						<CustomInput
							type={"text"}
							label={t("eventModal.form.details.location.title")}
							placeholder={t("eventModal.form.details.location.placeholder")}
							errorMessage={error?.message}
							{...fieldProps}
						/>
					)}
				/>
				<div>
					<AttendeeList
						disabled={formState.disabled}
						setAttendees={setAttendees}
						attendees={attendees}
						onAttendeesSet={(data) => {
							if (data.length === 0) setValue("attendee", undefined);
							else setValue("attendee", data);
						}}
					/>
					<Controller
						control={control}
						name={"attendee"}
						render={({
							field: { value, onChange, ...fieldProps },
							fieldState: { error },
						}) => (
							<div className={"relative"}>
								<CustomInput
									type={"text"}
									label={t("eventModal.form.details.attendees.title")}
									placeholder={t(
										"eventModal.form.details.attendees.placeholder",
									)}
									errorMessage={error?.message}
									value={valueAttendee}
									onChange={(e) => setAttendeeValue(e.target.value)}
									onKeyDownCapture={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											const value = (e.target as HTMLInputElement).value;
											addAttendee(value);
										}
									}}
									{...fieldProps}
								/>
								<MobileAddAttendeeButton
									onClick={() => addAttendee(valueAttendee)}
								/>
							</div>
						)}
					/>
				</div>

				<Button disabled={formState.disabled} type="submit">
					{selectedEvent
						? t("eventModal.modify.submit")
						: t("eventModal.create.submit")}
				</Button>
			</AuthForm>
		</DialogContent>
	);
};

export { ModalContent };
