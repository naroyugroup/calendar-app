import { DAYJS_DATE_FORMAT } from "@/consts.ts";
import { getEventsByRange } from "@api/calendar-events/get-events-by-range";
import type { EventEntitySchemaType } from "@api/calendar-events/types.ts";
import { getMonth } from "@lib/utils.ts";
import { calendarIdRoute } from "@router/routes.tsx";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import type {
	FullPageCalendarContextProviderProps,
	FullPageCalendarContextValues,
} from "./types.ts";
export const FullPageCalendarContext =
	React.createContext<FullPageCalendarContextValues | null>(null);

const FullPageCalendarContextProvider: React.FC<
	FullPageCalendarContextProviderProps
> = ({ children }) => {
	const [monthIndex, setMonthIndex] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const [selectedDay, setSelectedDay] = useState(dayjs());
	const [dialogOpen, setDialogOpen] = useState(false);
	const [smallCalendarMonthIdx, setSmallCalendarMonthIdx] = useState(
		dayjs().month(),
	);
	const [monthFirstLastDates, setMonthFirstLastDates] = useState(() => {
		const lastRow = currentMonth[currentMonth.length - 1];
		const lastElement = lastRow[lastRow.length - 1];
		const startDate = currentMonth[0][0].format(DAYJS_DATE_FORMAT);
		const endDate = lastElement.format(DAYJS_DATE_FORMAT);
		return { startDate, endDate };
	});

	const [selectedEvent, setSelectedEvent] =
		useState<EventEntitySchemaType | null>(null);

	const { id } = calendarIdRoute.useParams();

	const { data, isLoading } = useQuery({
		queryKey: [
			"events-by-range",
			monthFirstLastDates.endDate,
			monthFirstLastDates.startDate,
		],
		queryFn: () => {
			return getEventsByRange({
				calendarId: id,
				endDate: monthFirstLastDates.endDate,
				startDate: monthFirstLastDates.startDate,
			});
		},
	});

	useEffect(() => {
		if (!dialogOpen) setSelectedEvent(null);
	}, [dialogOpen]);

	useEffect(() => {
		const lastRow = currentMonth[currentMonth.length - 1];
		const lastElement = lastRow[lastRow.length - 1];
		const startDate = currentMonth[0][0].format(DAYJS_DATE_FORMAT);
		const endDate = lastElement.format(DAYJS_DATE_FORMAT);

		if (
			startDate !== monthFirstLastDates.startDate ||
			endDate !== monthFirstLastDates.endDate
		) {
			setMonthFirstLastDates({ startDate, endDate });
		}
	}, [
		currentMonth,
		monthFirstLastDates.endDate,
		monthFirstLastDates.startDate,
	]);

	useEffect(() => {
		setCurrentMonth(getMonth(monthIndex));
		setSmallCalendarMonthIdx(monthIndex);
	}, [monthIndex]);

	return (
		<FullPageCalendarContext.Provider
			value={{
				setSmallCalendarMonthIdx,
				smallCalendarMonthIdx,
				selectedEvent,
				setSelectedEvent,
				dialogOpen,
				setDialogOpen,
				events: data,
				eventsIsLoading: isLoading,
				setMonthIndex,
				monthIndex,
				setSelectedDay,
				selectedDay,
				setCurrentMonth,
				currentMonth,
			}}
		>
			{children}
		</FullPageCalendarContext.Provider>
	);
};

export { FullPageCalendarContextProvider };
