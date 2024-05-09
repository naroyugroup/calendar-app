import type { HTTPMethod } from "@/enums";
import type { z } from "zod";

export interface ApiProps<Request, Response> {
	method: HTTPMethod;
	path: string;
	requestSchema?: z.ZodType<Request>;
	responseSchema?: z.ZodType<Response>;
	credentials?: RequestCredentials;
}
export type ApiReturn<Request, Response> = (
	data?: Request,
) => Promise<Response | undefined>;
