import { useCalendarsMenuFilterList } from "@pages/app/calendars/hooks.ts";
import { calendarsRoute } from "@router/routes.tsx";
import type React from "react";

const Header: React.FC = () => {
	const { filter } = calendarsRoute.useSearch();
	const { calendarsMenuFilterList } = useCalendarsMenuFilterList();

	const computeHeaderText = () => {
		const currentFilter = calendarsMenuFilterList.find(
			(item) => item.searchParams.filter === filter,
		);

		if (currentFilter) return currentFilter.headerData.title;

		return "All Calendars";
	};

	return (
		<div className={"mt-10"}>
			<h1 className={"font-bold text-4xl"}>{computeHeaderText()}</h1>
		</div>
	);
};

export { Header };
