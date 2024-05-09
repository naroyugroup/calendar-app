import { UTC_TIME_REGEX, YYYY_MM_DD_REGEX } from "@/consts.ts";
import { ErrorMessages } from "@/enums";
import { z } from "zod";

export const eventSchema = z.object({
	attendee: z
		.array(z.string().email().min(1).max(320))
		.max(10)
		.refine((items) => new Set(items).size === items.length, {
			message: ErrorMessages.UNIQUE_ARRAY,
		})
		.optional(),
	location: z.string().max(250).optional(),
	summary: z.string().min(1, ErrorMessages.REQUIRED_FIELD).max(150),
	description: z.string().max(300).optional(),

	recurrenceRule: z.string().optional(),

	startDate: z.string().regex(YYYY_MM_DD_REGEX).optional(),
	startDateTime: z.string().regex(UTC_TIME_REGEX).optional(),
	startTimezone: z.string().optional(),
	endDate: z.string().regex(YYYY_MM_DD_REGEX).optional(),
	endDateTime: z.string().regex(UTC_TIME_REGEX).optional(),
	endTimezone: z.string().optional(),
});

export const attendeesSchema = z.object({
	attendee: z
		.array(z.string().email().min(1).max(320))
		.min(1)
		.max(10)
		.refine((items) => new Set(items).size === items.length, {
			message: ErrorMessages.UNIQUE_ARRAY,
		}),
});
