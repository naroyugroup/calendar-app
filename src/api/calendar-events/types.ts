import type { z } from "zod";
import type {
	EventEntityModifySchema,
	EventEntitySchema,
	EventPeriodEntityModifySchema,
	EventPeriodEntitySchema,
} from "./shared-schemas.ts";

export type EventEntitySchemaType = z.infer<typeof EventEntitySchema>;
export type EventPeriodEntitySchemaType = z.infer<
	typeof EventPeriodEntitySchema
>;
export type EventPeriodEntityModifySchemaType = z.infer<
	typeof EventPeriodEntityModifySchema
>;
export type EventEntityModifySchemaType = z.infer<
	typeof EventEntityModifySchema
>;
