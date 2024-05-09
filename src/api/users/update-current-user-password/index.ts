import api from "@/api";
import { HTTPMethod } from "@/enums";
import { currentUserSharedSchema } from "@api/users/shared-schemas.ts";
import { z } from "zod";
import type {
	PutUpdateCurrentUserPasswordParams,
	UpdateCurrentUserPasswordRequest,
	UpdateCurrentUserPasswordResponse,
} from "./types.ts";
export const updateCurrentUserPasswordRequestSchema = z.object({
	password: z.string(),
});

export const updateCurrentUserPasswordResponseSchema = currentUserSharedSchema;

const putUpdateCurrentUserPassword = ({
	requestData,
}: PutUpdateCurrentUserPasswordParams) => {
	return api<
		UpdateCurrentUserPasswordRequest,
		UpdateCurrentUserPasswordResponse
	>({
		method: HTTPMethod.PUT,
		path: "/api/users/me/password",
		credentials: "include",
		requestSchema: updateCurrentUserPasswordRequestSchema,
		responseSchema: updateCurrentUserPasswordResponseSchema,
	})(requestData);
};

export { putUpdateCurrentUserPassword };
