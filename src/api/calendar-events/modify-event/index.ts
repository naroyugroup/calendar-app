import api from "@/api";
import { HTTPMethod } from "@/enums";
import type {
	ModifyEventRequest,
	ModifyEventResponse,
	PutModifyEventParams,
} from "@api/calendar-events/modify-event/types.ts";
import {
	EventEntityModifySchema,
	EventEntitySchema,
} from "@api/calendar-events/shared-schemas.ts";

export const modifyEventRequestSchema = EventEntityModifySchema;

export const modifyEventResponseSchema = EventEntitySchema;

const putModifyEvent = ({
	eventId,
	calendarId,
	requestData,
}: PutModifyEventParams) => {
	return api<ModifyEventRequest, ModifyEventResponse>({
		method: HTTPMethod.PUT,
		path: `/api/calendars/${calendarId}/events/${eventId}`,
		credentials: "include",
		requestSchema: modifyEventRequestSchema,
		responseSchema: modifyEventResponseSchema,
	})(requestData);
};

export { putModifyEvent };
