import type { EventsByRangeResponse } from "@api/calendar-events/get-events-by-range/types.ts";
import type { EventEntitySchemaType } from "@api/calendar-events/types.ts";
import type { Dayjs } from "dayjs";
import type React from "react";

export interface FullPageCalendarContextValues {
	setMonthIndex: React.Dispatch<React.SetStateAction<number>>;
	monthIndex: number;
	selectedDay: Dayjs;
	setSelectedDay: React.Dispatch<React.SetStateAction<Dayjs>>;
	currentMonth: Dayjs[][];
	setCurrentMonth: React.Dispatch<React.SetStateAction<Dayjs[][]>>;
	events?: EventsByRangeResponse;
	eventsIsLoading: boolean;
	dialogOpen: boolean;
	setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
	selectedEvent: EventEntitySchemaType | null;
	setSelectedEvent: React.Dispatch<
		React.SetStateAction<EventEntitySchemaType | null>
	>;
	smallCalendarMonthIdx: number;
	setSmallCalendarMonthIdx: React.Dispatch<React.SetStateAction<number>>;
}

export interface FullPageCalendarContextProviderProps {
	children: React.ReactNode;
}
