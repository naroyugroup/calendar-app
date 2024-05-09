import api from "@/api";
import { HTTPMethod } from "@/enums";
import type {
	FavoriteRequest,
	FavoriteResponse,
	PutFavoriteParams,
} from "@api/calendars/put-favorite/types.ts";
import { z } from "zod";

export const favoriteRequestSchema = z.object({
	favorite: z.boolean(),
});

export const favoriteResponseSchema = z.object({
	favorite: z.boolean(),
	googleId: z.string().nullable(),
	id: z.number(),
	ownerId: z.number(),
	summary: z.string(),
});

const putFavorite = ({ calendarId, requestData }: PutFavoriteParams) => {
	return api<FavoriteRequest, FavoriteResponse>({
		method: HTTPMethod.PUT,
		path: `/api/calendars/${calendarId}/favorite`,
		credentials: "include",
		requestSchema: favoriteRequestSchema,
		responseSchema: favoriteResponseSchema,
	})(requestData);
};

export { putFavorite };
