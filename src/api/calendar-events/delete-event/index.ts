import api from "@/api";
import { HTTPMethod } from "@/enums";
import type { DeleteEventParams } from "@api/calendar-events/delete-event/types.ts";

const deleteEvent = ({ eventId, calendarId }: DeleteEventParams) => {
	return api<undefined, undefined>({
		method: HTTPMethod.DELETE,
		path: `/api/calendars/${calendarId}/events/${eventId}`,
		credentials: "include",
	})();
};

export { deleteEvent };
