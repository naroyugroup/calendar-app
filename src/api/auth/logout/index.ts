import { HTTPMethod } from "@/enums";
import api from "@api/index.ts";

const postLogout = api<undefined, undefined>({
	method: HTTPMethod.POST,
	path: "/api/auth/logout",
	credentials: "include",
});

export { postLogout };
