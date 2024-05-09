import type { removeParticipantRequestSchema } from "@api/calendars/delete-participant/index.ts";
import type { z } from "zod";

export type RemoveParticipantRequest = z.infer<
	typeof removeParticipantRequestSchema
>;

export interface RemoveParticipantParams {
	calendarId: string;
	requestData: RemoveParticipantRequest;
}
