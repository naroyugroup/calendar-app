import { ErrorMessages } from "@/enums";
import { passwordSchema } from "@/schemas";
import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().min(1, ErrorMessages.REQUIRED_FIELD).max(320).email(),
	password: passwordSchema,
});
