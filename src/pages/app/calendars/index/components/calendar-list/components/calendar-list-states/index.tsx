import { MenuFilter } from "@/enums";
import type { Calendars } from "@api/calendars/get-all-calendars/types.ts";
import { EmptyState } from "@pages/app/calendars/index/components/calendar-list/components/empty-states";
import type React from "react";
import { useTranslation } from "react-i18next";
import { MdErrorOutline } from "react-icons/md";

export interface CalendarListStatesProps {
	filter: MenuFilter;
	searchValue: string;
	filteredCalendars: Calendars | undefined;
	children: React.ReactNode;
}

const CalendarListStates: React.FC<CalendarListStatesProps> = ({
	filter,
	searchValue,
	filteredCalendars,
	children,
}) => {
	const { t } = useTranslation("appCalendars");

	if (!filteredCalendars) {
		return (
			<EmptyState
				header={t("content.card.emptyStates.error.header")}
				subheader={t("content.card.emptyStates.error.subheader")}
				icon={MdErrorOutline}
			/>
		);
	}

	if (filteredCalendars.length === 0 && searchValue) {
		return (
			<EmptyState
				header={t("content.card.emptyStates.search.header")}
				subheader={t("content.card.emptyStates.search.subheader")}
				imageSrc={"../public/empty-states/empty-search.svg"}
			/>
		);
	}

	if (
		!filteredCalendars ||
		(filter === MenuFilter.All && filteredCalendars.length === 0)
	) {
		return (
			<EmptyState
				header={t("content.card.emptyStates.all.header")}
				subheader={t("content.card.emptyStates.all.subheader")}
				imageSrc={"../public/empty-states/empty-data.svg"}
			/>
		);
	}

	if (filter === MenuFilter.Favorites && filteredCalendars.length === 0) {
		return (
			<EmptyState
				header={t("content.card.emptyStates.favorites.header")}
				subheader={t("content.card.emptyStates.favorites.subheader")}
				imageSrc={"../public/empty-states/empty-favorites.svg"}
			/>
		);
	}

	if (filter === MenuFilter.Google && filteredCalendars.length === 0) {
		return (
			<EmptyState
				header={t("content.card.emptyStates.google.header")}
				subheader={t("content.card.emptyStates.google.subheader")}
				imageSrc={"../public/empty-states/empty-data.svg"}
			/>
		);
	}

	return children;
};

export { CalendarListStates };
