import { HTTPMethod } from "@/enums";
import api from "@api/index.ts";
import { z } from "zod";
import type { AddParticipantsParams, AddParticipantsRequest } from "./types.ts";

export const addParticipantsRequestSchema = z.object({
	participants: z.array(z.string()),
});

const postAddParticipants = ({
	calendarId,
	requestData,
}: AddParticipantsParams) => {
	return api<AddParticipantsRequest, undefined>({
		method: HTTPMethod.POST,
		path: `/api/calendars/${calendarId}/participants/list`,
		credentials: "include",
		requestSchema: addParticipantsRequestSchema,
	})(requestData);
};

export { postAddParticipants };
