import type { loginSchema } from "@pages/auth/login/components/login-form/schemas.ts";
import type { z } from "zod";

export type LoginFormValues = z.infer<typeof loginSchema>;
