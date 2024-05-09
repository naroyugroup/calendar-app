import { MenuFilter } from "@/enums";
import { z } from "zod";

export const calendarsRouteSearchSchema = z.object({
	filter: z
		.nativeEnum(MenuFilter)
		.default(MenuFilter.All)
		.catch(MenuFilter.All),
	// search: z.string().optional().catch(''),
});

export const authLayoutRouteSearchSchema = z.object({
	redirect: z.string().optional().catch(""),
});
