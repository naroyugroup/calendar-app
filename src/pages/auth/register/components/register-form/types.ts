import type { registerSchema } from "@pages/auth/register/components/register-form/schemas.ts";
import type { z } from "zod";

export type RegisterFormValues = z.infer<typeof registerSchema>;
