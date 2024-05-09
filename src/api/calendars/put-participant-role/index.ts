import api from "@/api";
import { HTTPMethod } from "@/enums";
import { roleSchema } from "@api/calendars/shared-schemas.ts";
import { z } from "zod";
import type {
	ParticipantRoleRequest,
	PutParticipantRoleParams,
} from "./types.ts";

export const participantRoleRequestSchema = z.object({
	email: z.string(),
	role: roleSchema,
});

const putParticipantRole = ({
	calendarId,
	requestData,
}: PutParticipantRoleParams) => {
	return api<ParticipantRoleRequest, undefined>({
		method: HTTPMethod.PUT,
		path: `/api/calendars/${calendarId}/participants`,
		credentials: "include",
		requestSchema: participantRoleRequestSchema,
	})(requestData);
};

export { putParticipantRole };
