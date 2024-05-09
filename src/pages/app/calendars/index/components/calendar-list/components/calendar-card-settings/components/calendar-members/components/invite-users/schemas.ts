import { ErrorMessages } from "@/enums";
import { z } from "zod";

export const emailsSchema = z.object({
	emails: z
		.array(z.string().email().min(1).max(320))
		.min(1)
		.max(10)
		.refine((items) => new Set(items).size === items.length, {
			message: ErrorMessages.UNIQUE_ARRAY,
		}),
});
