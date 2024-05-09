import { HTTPMethod } from "@/enums";
import type { Calendars } from "@api/calendars/get-all-calendars/types.ts";
import { calendarSchema } from "@api/calendars/shared-schemas.ts";
import api from "@api/index.ts";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

export const allCalendarsResponseSchema = z.array(calendarSchema);

const getAllCalendars = api<undefined, Calendars>({
	method: HTTPMethod.GET,
	path: "/api/calendars/all",
	credentials: "include",
	responseSchema: allCalendarsResponseSchema,
});

const getAllCalendarsGroup = () => {
	return queryOptions({
		queryKey: ["all-calendars"],
		queryFn: () => getAllCalendars(),
	});
};

export { getAllCalendars, getAllCalendarsGroup };
