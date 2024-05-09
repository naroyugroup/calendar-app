import { ErrorMessages } from "@/enums";
import { passwordRegex } from "@schemas/consts.ts";
import { z } from "zod";

export const passwordSchema = z
	.string()
	.min(1, ErrorMessages.REQUIRED_FIELD)
	.min(8)
	.max(128)
	.regex(passwordRegex, {
		message: ErrorMessages.PASSWORD_CRITERIA,
	});

export const nameSchema = z
	.string()
	.min(1, ErrorMessages.REQUIRED_FIELD)
	.max(320)
	.trim();
