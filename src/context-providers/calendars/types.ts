import type { Calendar } from "@api/calendars/get-all-calendars/types.ts";
import type React from "react";

export interface CalendarContextValues {
	calendar: Calendar;
}

export interface CalendarContextProviderProps {
	children: React.ReactNode;
	calendar: Calendar;
}
