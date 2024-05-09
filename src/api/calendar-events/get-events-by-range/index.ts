import api from "@/api";
import { HTTPMethod } from "@/enums";
import { EventEntitySchema } from "@api/calendar-events/shared-schemas.ts";
import { z } from "zod";
import type {
	EventsByRangeResponse,
	GetEventsByRangeEventParams,
} from "./types.ts";

export const eventsByRangeResponseSchema = z.array(EventEntitySchema);

const getEventsByRange = ({
	calendarId,
	endDate,
	startDate,
}: GetEventsByRangeEventParams) => {
	return api<undefined, EventsByRangeResponse>({
		method: HTTPMethod.GET,
		path: `/api/calendars/${calendarId}/events/range?${new URLSearchParams({
			startDate,
			endDate,
		})}`,
		credentials: "include",
		responseSchema: eventsByRangeResponseSchema,
	})();
};

export { getEventsByRange };
