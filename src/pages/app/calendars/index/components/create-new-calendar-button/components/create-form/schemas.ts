// import { ACCEPTED_IMAGE_MIME_TYPES, MAX_BG_IMAGE_SIZE } from "@/consts.ts";
import { ErrorMessages } from "@/enums";
import { z } from "zod";

export const addCalendarSchema = z.object({
	// calendarImage: z
	// 	.any()
	// 	.refine((file) => {
	// 		if (!file) return true;
	// 		return file.size <= MAX_BG_IMAGE_SIZE;
	// 	}, ErrorMessages.MAX_BG_IMAGE_SIZE)
	// 	.refine((file) => {
	// 		if (!file) return true;
	// 		return ACCEPTED_IMAGE_MIME_TYPES.includes(file.type);
	// 	}, ErrorMessages.ACCEPTED_IMAGE_MIME_TYPES),
	calendarName: z.string().min(1, ErrorMessages.REQUIRED_FIELD).max(320),
});
