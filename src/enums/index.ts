export enum ErrorMessages {
	REQUIRED_FIELD = "Required field",
	MAX_BG_IMAGE_SIZE = "Max image size is 1MB.",
	ACCEPTED_IMAGE_MIME_TYPES = "Only .jpg, .jpeg, .png and .webp formats are supported.",
	PASSWORD_CRITERIA = "Password must meet the minimum requirements (min 1 number, 1 uppercase letter, 1 symbol, no whitespaces)",
	UNKNOWN_ERROR = "Something went wrong",
	PARSE_RESPONSE_ERROR = "Invalid response",
	PARSE_REQUEST_ERROR = "Invalid request",
	UNIQUE_ARRAY = "Must be an array of unique entities",
}

export enum HTTPMethod {
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
}

export enum HTTPStatusCode {
	OK = 200,
}

export enum MenuFilter {
	All = "all",
	Favorites = "favorites",
	Google = "google",
}

export enum SupportedLanguageCode {
	Czech = "cs",
	English = "en",
}
export enum SupportedLanguageLabel {
	Czech = "Czech",
	English = "English",
}

export enum Recurrence {
	DoesNotRepeat = "DoesNotRepeat",
	Daily = "Daily",
	Monthly = "Monthly",
	Weekly = "Weekly",
	Yearly = "Yearly",
}
