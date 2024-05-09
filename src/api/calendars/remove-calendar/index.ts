import api from "@/api";
import { HTTPMethod } from "@/enums";
import type { DeleteRemoveCalendarParams } from "@api/calendars/remove-calendar/types.ts";

const deleteRemoveCalendar = ({ calendarId }: DeleteRemoveCalendarParams) => {
	return api<undefined, undefined>({
		method: HTTPMethod.DELETE,
		path: `/api/calendars/${calendarId}`,
		credentials: "include",
	})();
};

export { deleteRemoveCalendar };
