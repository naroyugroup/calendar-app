import type { roleSchema } from "@api/calendars/shared-schemas.ts";
import type { z } from "zod";

export type RoleValue = z.infer<typeof roleSchema>;
