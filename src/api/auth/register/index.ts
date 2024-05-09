import { HTTPMethod } from "@/enums";
import api from "@api/index.ts";
import { z } from "zod";

const registerRequest = z.object({
	email: z.string(),
	name: z.string(),
	password: z.string(),
});

const postRegister = api<z.infer<typeof registerRequest>, undefined>({
	method: HTTPMethod.POST,
	path: "/api/auth/register",
	requestSchema: registerRequest,
});

export { postRegister };
