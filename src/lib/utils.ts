import { roles } from "@/consts.ts";
import type { RoleValue } from "@api/calendars/types.ts";
import { type ClassValue, clsx } from "clsx";
import dayjs, { type Dayjs } from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const debounce = <
	F extends (...args: F[]) => ReturnType<F> | PromiseLike<ReturnType<F>>,
>(
	func: F,
	waitFor: number,
) => {
	let timeout: string | number | NodeJS.Timeout | undefined;

	return (...args: Parameters<F>): Promise<ReturnType<F>> =>
		new Promise((resolve) => {
			if (timeout) {
				clearTimeout(timeout);
			}

			timeout = setTimeout(() => resolve(func(...args)), waitFor);
		});
};

export const roleValueToLabel = (roleValue: RoleValue) => {
	const role = roles.find((role) => role.value === roleValue);

	return role?.label;
};

export const getMonth = (month = dayjs().month()): Dayjs[][] => {
	const preciseMonth = Math.floor(month);
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, preciseMonth, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(6).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, preciseMonth, currentMonthCount));
		});
	});
	return daysMatrix;
};

export const calculateSelectedMonth = (day: Dayjs) => {
	const yearDifference = day.year() - dayjs().year();
	const monthDifference = day.month() - dayjs().month();
	const monthDiff = yearDifference * 12 + monthDifference;
	return monthDiff + dayjs().month();
};

export const getHHMMSSTimeFromString = (value: string) => {
	const timeRegex = /(\d{2}):(\d{2}):(\d{2})/;
	const timeMatch = value.toString().match(timeRegex);
	if (!timeMatch) return;

	const hours = Number.parseInt(timeMatch[1], 10);
	const minutes = Number.parseInt(timeMatch[2], 10);
	const seconds = Number.parseInt(timeMatch[3], 10);
	return { hours, minutes, seconds };
};
