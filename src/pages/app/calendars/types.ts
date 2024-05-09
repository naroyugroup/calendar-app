import type { MenuFilter } from "@enums/index.ts";
import type { IconType } from "react-icons";

export interface User {
	id: string;
	image?: string;
	alt: string;
	fallbackName: string;
}

export interface CalendarCard {
	id: string;
	title: string;
	filter: MenuFilter;
	users: User[];
}

export interface CalendarsMenuFilter {
	buttonData: {
		label: string;
		icon: IconType;
	};
	headerData: {
		title: string;
	};
	searchParams: {
		filter: MenuFilter;
	};
}
