import type { addParticipantsRequestSchema } from "@api/calendars/add-participants/index.ts";
import type { z } from "zod";

export type AddParticipantsRequest = z.infer<
	typeof addParticipantsRequestSchema
>;

export interface AddParticipantsParams {
	calendarId: string;
	requestData: AddParticipantsRequest;
}
