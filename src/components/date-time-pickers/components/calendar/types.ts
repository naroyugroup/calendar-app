import type { CalendarDate } from "@internationalized/date";
import type { CalendarState } from "react-stately";

export interface CalendarCellProps {
	state: CalendarState;
	date: CalendarDate;
}

export interface CalendarGridProps {
	state: CalendarState;
}
