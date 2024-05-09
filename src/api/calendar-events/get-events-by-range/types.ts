import type { z } from "zod";
import type { eventsByRangeResponseSchema } from "./index.ts";

export type EventsByRangeResponse = z.infer<typeof eventsByRangeResponseSchema>;

export interface GetEventsByRangeEventParams {
	calendarId: string;
	startDate: string;
	endDate: string;
}
