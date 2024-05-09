import type {
	updateCurrentUserNameRequestSchema,
	updateCurrentUserNameResponseSchema,
} from "@api/users/update-current-user-name/index.ts";
import type { z } from "zod";

export type UpdateCurrentUserNameRequest = z.infer<
	typeof updateCurrentUserNameRequestSchema
>;

export type UpdateCurrentUserNameResponse = z.infer<
	typeof updateCurrentUserNameResponseSchema
>;

export interface PutUpdateCurrentUserNameParams {
	requestData: UpdateCurrentUserNameRequest;
}
