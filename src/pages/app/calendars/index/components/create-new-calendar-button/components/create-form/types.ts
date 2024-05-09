import type React from "react";
import type { z } from "zod";
import type { addCalendarSchema } from "./schemas.ts";

export interface CreateFormProps {
	contentOpen: boolean;
	setContentOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type AddCalendarValues = z.infer<typeof addCalendarSchema>;
