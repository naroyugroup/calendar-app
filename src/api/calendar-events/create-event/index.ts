import api from "@/api";
import { HTTPMethod } from "@/enums";
import type {
	CreateEventRequest,
	CreateEventResponse,
	PostCreateEventParams,
} from "@api/calendar-events/create-event/types.ts";
import {
	EventEntityModifySchema,
	EventEntitySchema,
} from "@api/calendar-events/shared-schemas.ts";

export const createEventRequestSchema = EventEntityModifySchema;

export const createEventResponseSchema = EventEntitySchema;

const postCreateEvent = ({
	calendarId,
	requestData,
}: PostCreateEventParams) => {
	return api<CreateEventRequest, CreateEventResponse>({
		method: HTTPMethod.POST,
		path: `/api/calendars/${calendarId}/events`,
		credentials: "include",
		requestSchema: createEventRequestSchema,
		responseSchema: createEventResponseSchema,
	})(requestData);
};

export { postCreateEvent };
