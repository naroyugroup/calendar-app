import type { z } from "zod";
import type { editCalendarSchema } from "./schemas.ts";

export interface CalendarEditProps {
	contentOpen: boolean;
}

export type EditCalendarValues = z.infer<typeof editCalendarSchema>;
