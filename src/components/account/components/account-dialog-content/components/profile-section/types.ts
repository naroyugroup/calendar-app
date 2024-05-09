import type { changeNameSchema } from "@components/account/components/account-dialog-content/components/profile-section/schemas.ts";
import type { z } from "zod";

export type ChangeNameFormData = z.infer<typeof changeNameSchema>;
