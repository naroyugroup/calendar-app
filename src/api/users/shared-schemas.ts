import { UTC_TIME_REGEX } from "@/consts.ts";
import { z } from "zod";

export const currentUserSharedSchema = z.object({
	id: z.number(),
	googleId: z.string().nullable(),
	email: z.string(),
	name: z.string(),
	picture: z.string().url().nullable(),
	created: z.string().regex(UTC_TIME_REGEX),
});
