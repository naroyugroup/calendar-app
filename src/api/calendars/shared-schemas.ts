import { UTC_TIME_REGEX } from "@/consts.ts";
import { z } from "zod";

export const roleSchema = z.union([
	z.literal("owner"),
	z.literal("admin"),
	z.literal("member"),
]);

export const participantSchema = z.object({
	id: z.number(),
	googleId: z.string().nullable(),
	email: z.string(),
	name: z.string(),
	picture: z.string().url().nullable(),
	created: z.string().regex(UTC_TIME_REGEX),
	role: roleSchema,
});

export const calendarSchema = z.object({
	favorite: z.boolean(),
	googleId: z.string().nullable(),
	id: z.number(),
	ownerId: z.number(),
	summary: z.string(),
	participants: z.array(participantSchema),
});
