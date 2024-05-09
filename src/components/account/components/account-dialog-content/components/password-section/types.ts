import type { changePasswordSchema } from "@components/account/components/account-dialog-content/components/password-section/schemas.ts";
import type { z } from "zod";

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
