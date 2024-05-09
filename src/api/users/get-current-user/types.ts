import type { currentUserResponseSchema } from "@api/users/get-current-user/index.ts";
import type { z } from "zod";

export type CurrentUser = z.infer<typeof currentUserResponseSchema>;
