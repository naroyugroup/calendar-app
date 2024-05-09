import { calendarId as appCalendarId } from "@/locales/en/app/calendarId";
import { calendars as appCalendars } from "@/locales/en/app/calendars";
import { auth } from "@/locales/en/auth";
import { globals } from "@/locales/en/globals";

const en = {
	auth,
	globals,
	appCalendars,
	appCalendarId,
} as const;

export { en };
