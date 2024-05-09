import { ErrorMessages } from "@/enums";
import { nameSchema, passwordSchema } from "@/schemas";
import { z } from "zod";

export const registerSchema = z
	.object({
		email: z.string().min(1, ErrorMessages.REQUIRED_FIELD).max(320).email(),
		name: nameSchema,
		password: passwordSchema,
		confirmPassword: passwordSchema,
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				path: ["confirmPassword"],
				code: "custom",
				message: "The passwords did not match",
			});
		}
	});
