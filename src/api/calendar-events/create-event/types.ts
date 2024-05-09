import type {
	createEventRequestSchema,
	createEventResponseSchema,
} from "@api/calendar-events/create-event/index.ts";
import type { z } from "zod";

export type CreateEventRequest = z.infer<typeof createEventRequestSchema>;

export type CreateEventResponse = z.infer<typeof createEventResponseSchema>;

export interface PostCreateEventParams {
	calendarId: string;
	requestData: CreateEventRequest;
}
