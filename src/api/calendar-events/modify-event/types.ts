import type { z } from "zod";
import type {
	modifyEventRequestSchema,
	modifyEventResponseSchema,
} from "./index.ts";

export type ModifyEventRequest = z.infer<typeof modifyEventRequestSchema>;

export type ModifyEventResponse = z.infer<typeof modifyEventResponseSchema>;

export interface PutModifyEventParams {
	calendarId: string;
	eventId: string;
	requestData: ModifyEventRequest;
}
