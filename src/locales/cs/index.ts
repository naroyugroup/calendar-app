import { calendarId as appCalendarId } from "@/locales/cs/app/calendarId";
import { calendars as appCalendars } from "@/locales/cs/app/calendars";
import { auth } from "@/locales/cs/auth";
import { globals } from "@/locales/cs/globals";

const cs = {
	auth,
	globals,
	appCalendars,
	appCalendarId,
} as const;

export { cs };
