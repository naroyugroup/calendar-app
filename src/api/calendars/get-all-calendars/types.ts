import type { allCalendarsResponseSchema } from "@api/calendars/get-all-calendars/index.ts";
import type {
	calendarSchema,
	participantSchema,
} from "@api/calendars/shared-schemas.ts";
import type { z } from "zod";

export type Participant = z.infer<typeof participantSchema>;
export type Calendar = z.infer<typeof calendarSchema>;

export type Calendars = z.infer<typeof allCalendarsResponseSchema>;
