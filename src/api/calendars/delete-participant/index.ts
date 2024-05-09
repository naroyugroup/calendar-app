import api from "@/api";
import { HTTPMethod } from "@/enums";
import { z } from "zod";
import type {
	RemoveParticipantParams,
	RemoveParticipantRequest,
} from "./types.ts";

export const removeParticipantRequestSchema = z.object({
	email: z.string(),
});

const deleteRemoveParticipant = ({
	calendarId,
	requestData,
}: RemoveParticipantParams) => {
	return api<RemoveParticipantRequest, undefined>({
		method: HTTPMethod.DELETE,
		path: `/api/calendars/${calendarId}/participants`,
		credentials: "include",
		requestSchema: removeParticipantRequestSchema,
	})(requestData);
};

export { deleteRemoveParticipant };
