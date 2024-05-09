import api from "@/api";
import { HTTPMethod } from "@/enums";
import { z } from "zod";
import type {
	PutUpdateCalendarParams,
	UpdateCalendarRequest,
	UpdateCalendarResponse,
} from "./types.ts";

export const updateCalendarRequestSchema = z.object({
	summary: z.string(),
});

export const updateCalendarResponseSchema = z.object({
	favorite: z.boolean(),
	googleId: z.string().nullable(),
	id: z.number(),
	ownerId: z.number(),
	summary: z.string(),
});

const putUpdateCalendar = ({
	calendarId,
	requestData,
}: PutUpdateCalendarParams) => {
	return api<UpdateCalendarRequest, UpdateCalendarResponse>({
		method: HTTPMethod.PUT,
		path: `/api/calendars/${calendarId}`,
		credentials: "include",
		requestSchema: updateCalendarRequestSchema,
		responseSchema: updateCalendarResponseSchema,
	})(requestData);
};

export { putUpdateCalendar };
