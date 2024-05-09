import type {
	favoriteRequestSchema,
	favoriteResponseSchema,
} from "@api/calendars/put-favorite/index.ts";
import type { z } from "zod";

export type FavoriteRequest = z.infer<typeof favoriteRequestSchema>;

export type FavoriteResponse = z.infer<typeof favoriteResponseSchema>;

export interface PutFavoriteParams {
	calendarId: string;
	requestData: FavoriteRequest;
}
