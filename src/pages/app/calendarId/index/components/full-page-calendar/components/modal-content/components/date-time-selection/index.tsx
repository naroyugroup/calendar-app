import { DateTimePicker } from "@components/date-time-pickers/date-time-picker";
import { Label } from "@components/ui/label";
import { parseAbsolute } from "@internationalized/date";
import { getHHMMSSTimeFromString } from "@lib/utils.ts";
import type { DateTimeSelectionProps } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/date-time-selection/types.ts";
import dayjs from "dayjs";
import type React from "react";
import { useTranslation } from "react-i18next";

const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({
	isAllDayEvent,
	setSelectedDateTime,
	selectedDateTime,
	disabled,
}) => {
	const { t } = useTranslation("appCalendarId");
	if (isAllDayEvent)
		return (
			<div className={"w-full grid gap-y-1.5 relative"}>
				<Label>{t("eventModal.form.date.pickDate.title")}</Label>
				<DateTimePicker
					isDisabled={disabled}
					inputFieldDisabledMuted
					inputFieldDisabled
					label={"Pick date"}
					granularity="day"
					value={parseAbsolute(
						selectedDateTime.pickedDate.utc().format(),
						Intl.DateTimeFormat().resolvedOptions().timeZone,
					)}
					onChange={(value) => {
						setSelectedDateTime({
							pickedDate: dayjs(`${value.year}-${value.month}-${value.day}`),
							startDateTime: dayjs(`${value.year}-${value.month}-${value.day}`),
							endDateTime: dayjs(`${value.year}-${value.month}-${value.day}`),
							endTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
							startTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
						});
					}}
				/>
			</div>
		);

	return (
		<div className={"flex flex-col gap-x-4 md:flex-row gap-y-4"}>
			<div className={"w-full grid gap-y-1.5 relative"}>
				<Label>{t("eventModal.form.date.startDate.title")}</Label>
				<DateTimePicker
					isDisabled={disabled}
					inputFieldDisabledMuted
					inputFieldDisabled
					label={"Start date"}
					granularity={"minute"}
					value={parseAbsolute(
						selectedDateTime.startDateTime.utc().format(),
						selectedDateTime.startTimeZone,
					)}
					onChange={(value) => {
						const time = getHHMMSSTimeFromString(value.toString());
						if (!time) return;
						const { hours, minutes } = time;
						setSelectedDateTime((prev) => {
							const minutesDiff = dayjs(
								`${value.year}-${value.month}-${value.day} ${hours}:${minutes}`,
							).diff(prev.endDateTime, "minute");

							return {
								pickedDate: dayjs(`${value.year}-${value.month}-${value.day}`),
								startDateTime: dayjs(
									`${value.year}-${value.month}-${value.day} ${hours}:${minutes}`,
								),
								endDateTime: dayjs(
									`${value.year}-${value.month}-${value.day} ${
										minutesDiff < 0 ? prev.endDateTime.hour() : hours
									}:${minutesDiff < 0 ? prev.endDateTime.minute() : minutes}`,
								),
								endTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
								startTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
							};
						});
					}}
				/>
			</div>

			<div className={"w-full grid gap-y-1.5 relative"}>
				<Label>{t("eventModal.form.date.endDate.title")}</Label>
				<DateTimePicker
					isDisabled={disabled}
					inputFieldDisabledMuted
					inputFieldDisabled
					label={"End date"}
					minValue={parseAbsolute(
						selectedDateTime.startDateTime.utc().format(),
						selectedDateTime.startTimeZone,
					)}
					maxValue={parseAbsolute(
						selectedDateTime.startDateTime.utc().format(),
						selectedDateTime.startTimeZone,
					)}
					granularity={"minute"}
					value={parseAbsolute(
						selectedDateTime.endDateTime.utc().format(),
						selectedDateTime.endTimeZone,
					)}
					onChange={(value) => {
						const time = getHHMMSSTimeFromString(value.toString());
						if (!time) return;
						const { hours, minutes } = time;
						setSelectedDateTime((prev) => {
							const minutesDiff = dayjs(
								`${value.year}-${value.month}-${value.day} ${hours}:${minutes}`,
							).diff(prev.startDateTime, "minute");

							if (minutesDiff < 0) return prev;

							return {
								pickedDate: dayjs(`${value.year}-${value.month}-${value.day}`),
								startDateTime: dayjs(
									`${value.year}-${value.month}-${
										value.day
									} ${prev.startDateTime.hour()}:${prev.startDateTime.minute()}`,
								),
								endDateTime: dayjs(
									`${value.year}-${value.month}-${value.day} ${hours}:${minutes}`,
								),
								endTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
								startTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
							};
						});
					}}
				/>
			</div>
		</div>
	);
};

export { DateTimeSelection };
