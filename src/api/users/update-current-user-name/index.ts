import api from "@/api";
import { HTTPMethod } from "@/enums";
import { currentUserSharedSchema } from "@api/users/shared-schemas.ts";
import { z } from "zod";
import type {
	PutUpdateCurrentUserNameParams,
	UpdateCurrentUserNameRequest,
	UpdateCurrentUserNameResponse,
} from "./types.ts";

export const updateCurrentUserNameRequestSchema = z.object({
	name: z.string(),
});

export const updateCurrentUserNameResponseSchema = currentUserSharedSchema;

const putUpdateCurrentUserName = ({
	requestData,
}: PutUpdateCurrentUserNameParams) => {
	return api<UpdateCurrentUserNameRequest, UpdateCurrentUserNameResponse>({
		method: HTTPMethod.PUT,
		path: "/api/users/me",
		credentials: "include",
		requestSchema: updateCurrentUserNameRequestSchema,
		responseSchema: updateCurrentUserNameResponseSchema,
	})(requestData);
};

export { putUpdateCurrentUserName };
