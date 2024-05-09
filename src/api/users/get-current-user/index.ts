import { HTTPMethod } from "@/enums";
import api from "@api/index.ts";
import type { CurrentUser } from "@api/users/get-current-user/types.ts";
import { currentUserSharedSchema } from "@api/users/shared-schemas.ts";

export const currentUserResponseSchema = currentUserSharedSchema;

const getCurrentUser = api<undefined, CurrentUser>({
	method: HTTPMethod.GET,
	path: "/api/users/me",
	credentials: "include",
	responseSchema: currentUserResponseSchema,
});

export { getCurrentUser };
