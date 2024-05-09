import type { participantRoleRequestSchema } from "@api/calendars/put-participant-role/index.ts";
import type { z } from "zod";

export type ParticipantRoleRequest = z.infer<
	typeof participantRoleRequestSchema
>;

export interface PutParticipantRoleParams {
	calendarId: string;
	requestData: ParticipantRoleRequest;
}
