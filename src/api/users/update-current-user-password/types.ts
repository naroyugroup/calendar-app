import type { z } from "zod";
import type {
	updateCurrentUserPasswordRequestSchema,
	updateCurrentUserPasswordResponseSchema,
} from "./index.ts";

export type UpdateCurrentUserPasswordRequest = z.infer<
	typeof updateCurrentUserPasswordRequestSchema
>;

export type UpdateCurrentUserPasswordResponse = z.infer<
	typeof updateCurrentUserPasswordResponseSchema
>;

export interface PutUpdateCurrentUserPasswordParams {
	requestData: UpdateCurrentUserPasswordRequest;
}
