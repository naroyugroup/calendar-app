import type { Role } from "roles";

export const BASE_API_LINK = import.meta.env.VITE_API_URL;

export const RESIZE_DEBOUNCE_TIME = 200;
export const MEDIUM_SCREEN_PX = 768;
export const MAX_OTHERS_SHOWN_USERS = 2;

export const MAX_BG_IMAGE_SIZE = 1024 * 1024;
export const ACCEPTED_IMAGE_MIME_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

export const roles: Role[] = [
	{
		value: "admin",
		label: "Admin",
	},
	{
		value: "owner",
		label: "Owner",
	},
	{
		value: "member",
		label: "Member",
	},
];

export const UTC_TIME_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

export const TIME_WITH_TIMEZONE_REGEX =
	/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/;

export const YYYY_MM_DD_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export const DAYJS_UTC_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSS";
export const DAYJS_DATE_FORMAT = "YYYY-MM-DD";
