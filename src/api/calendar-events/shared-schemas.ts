import { UTC_TIME_REGEX, YYYY_MM_DD_REGEX } from "@/consts.ts";
import { z } from "zod";

export const EventPeriodEntitySchema = z.object({
	id: z.number(),
	eventId: z.string(),
	startDate: z.string().regex(YYYY_MM_DD_REGEX).nullish(),
	startDateTime: z.string().regex(UTC_TIME_REGEX).nullish(),
	startTimezone: z.string().nullish(),
	endDate: z.string().regex(YYYY_MM_DD_REGEX).nullish(),
	endDateTime: z.string().regex(UTC_TIME_REGEX).nullish(),
	endTimezone: z.string().nullish(),
});

export const EventEntitySchema = z.object({
	id: z.string(),
	googleId: z.string().nullish(),
	calendarId: z.number(),
	period: EventPeriodEntitySchema,
	summary: z.string(),
	description: z.string().nullish(),
	location: z.string().nullish(),
	recurrenceRule: z.string().nullish(),
	creator: z.string().email(),
	organizer: z.string().email(),
	attendee: z.array(z.string().email()).nullish(),
	created: z.string().datetime(),
	updated: z.string().datetime(),
});

export const EventPeriodEntityModifySchema = z.object({
	startDate: z.string().regex(YYYY_MM_DD_REGEX),
	startDateTime: z.string().regex(UTC_TIME_REGEX).nullish(),
	startTimezone: z.string().nullish(),
	endDate: z.string().regex(YYYY_MM_DD_REGEX),
	endDateTime: z.string().regex(UTC_TIME_REGEX).nullish(),
	endTimezone: z.string().nullish(),
});

export const EventEntityModifySchema = z.object({
	period: EventPeriodEntityModifySchema,
	summary: z.string(),
	description: z.string().nullish(),
	location: z.string().nullish(),
	recurrenceRule: z.string().nullish(),
	creator: z.string().email(),
	organizer: z.string().email(),
	attendee: z.array(z.string().email()).nullish(),
});
