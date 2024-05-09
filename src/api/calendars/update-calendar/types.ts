import type {
	updateCalendarRequestSchema,
	updateCalendarResponseSchema,
} from "@api/calendars/update-calendar/index.ts";
import type { z } from "zod";

export type UpdateCalendarRequest = z.infer<typeof updateCalendarRequestSchema>;

export type UpdateCalendarResponse = z.infer<
	typeof updateCalendarResponseSchema
>;

export interface PutUpdateCalendarParams {
	calendarId: string;
	requestData: UpdateCalendarRequest;
}
