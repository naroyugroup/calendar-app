import type { Dayjs } from "dayjs";
import type { z } from "zod";
import type { eventSchema } from "./schema.ts";

export type EventFormData = z.infer<typeof eventSchema>;

export interface SelectedDateTime {
	pickedDate: Dayjs;
	startDateTime: Dayjs;
	startTimeZone: string;
	endDateTime: Dayjs;
	endTimeZone: string;
}
