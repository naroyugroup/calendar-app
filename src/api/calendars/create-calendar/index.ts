import { HTTPMethod } from "@/enums";
import api from "@api/index.ts";
import { z } from "zod";

const createCalendarRequest = z.object({
	summary: z.string(),
});

const postCreateCalendar = api<
	z.infer<typeof createCalendarRequest>,
	undefined
>({
	method: HTTPMethod.POST,
	path: "/api/calendars",
	credentials: "include",
	requestSchema: createCalendarRequest,
});

export { postCreateCalendar };
