import { HTTPMethod } from "@/enums";
import api from "@api/index.ts";
import { z } from "zod";

const loginRequest = z.object({
	email: z.string(),
	password: z.string(),
});

const postLogin = api<z.infer<typeof loginRequest>, undefined>({
	method: HTTPMethod.POST,
	path: "/api/auth/login",
	credentials: "include",
	requestSchema: loginRequest,
});

export { postLogin };
