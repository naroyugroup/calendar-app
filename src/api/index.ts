import { BASE_API_LINK } from "@/consts.ts";
import { ErrorMessages, HTTPMethod } from "@/enums";
import type { ApiProps, ApiReturn } from "@api/types.ts";

const api = <Request, Response>({
	method,
	path,
	requestSchema,
	responseSchema,
	credentials,
}: ApiProps<Request, Response>): ApiReturn<Request, Response> => {
	return (requestData) => {
		// * Validating request data
		if (requestSchema && !requestSchema.safeParse(requestData).success)
			throw new Error(ErrorMessages.PARSE_REQUEST_ERROR);

		const apiCall = async () => {
			try {
				const requestOptions: RequestInit = {
					method,
					headers: {
						"Content-Type": "application/json",
					},
					credentials,
					body:
						method !== HTTPMethod.GET && requestData
							? JSON.stringify(requestData)
							: undefined,
				};

				const response = await fetch(`${BASE_API_LINK}${path}`, requestOptions);

				if (!response.ok) {
					throw new Error(response.statusText);
				}

				if (!responseSchema) {
					return;
				}

				const responseData = await response.json();

				// * Validating response data
				const responseResult = responseSchema.safeParse(responseData);
				if (!responseResult.success) {
					throw new Error(ErrorMessages.PARSE_RESPONSE_ERROR);
				}

				return responseData as Response;
			} catch (e: unknown) {
				if (e instanceof Error) {
					throw new Error(e.message);
				}
				throw new Error(ErrorMessages.UNKNOWN_ERROR);
			}
		};
		return apiCall();
	};
};

export default api;
