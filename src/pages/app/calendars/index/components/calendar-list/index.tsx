import { MenuFilter } from "@/enums";
import { getAllCalendarsGroup } from "@api/calendars/get-all-calendars";
import type { Calendars } from "@api/calendars/get-all-calendars/types.ts";
import { CalendarContextProvider } from "@context-providers/calendars";
import { CalendarCardSettings } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings";
import { CalendarListStates } from "@pages/app/calendars/index/components/calendar-list/components/calendar-list-states";
import { FavoriteButton } from "@pages/app/calendars/index/components/calendar-list/components/favorite-button";
import { Footer } from "@pages/app/calendars/index/components/calendar-list/components/footer";
import { CalendarListSkeleton } from "@pages/app/calendars/index/components/calendar-list/components/skeleton";
import type { CalendarListProps } from "@pages/app/calendars/index/components/calendar-list/types.ts";
import { calendarsRoute } from "@router/routes.tsx";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import type React from "react";
import { useMemo } from "react";
import { CalendarCardOverlay } from "./components/calendar-card-overlay";

const CalendarList: React.FC<CalendarListProps> = ({ searchValue }) => {
	const { filter } = calendarsRoute.useSearch();

	const { data, isLoading } = useQuery(getAllCalendarsGroup());

	const filteredCalendars: Calendars | undefined = useMemo(() => {
		if (!data) return;
		return data.filter((item) => {
			const searchFilter = item.summary.toLowerCase().includes(searchValue);

			if (filter === MenuFilter.All) return searchFilter;
			if (filter === MenuFilter.Favorites) return item.favorite && searchFilter;
			if (filter === MenuFilter.Google) return item.googleId && searchFilter;
			return false;
		});
	}, [searchValue, filter, data]);

	if (isLoading) return <CalendarListSkeleton />;

	// ! TODO: add optimization react-virtualized or react-window

	return (
		<CalendarListStates
			filteredCalendars={filteredCalendars}
			searchValue={searchValue}
			filter={filter}
		>
			<div
				className={
					"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-8 gap-5 mt-8 pb-10"
				}
			>
				{filteredCalendars?.map((calendar) => (
					<CalendarContextProvider calendar={calendar} key={calendar.id}>
						<div
							className={
								"relative group aspect-[130/100] border rounded-lg flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-md"
							}
						>
							<div className="size-full bg-gradient-to-r from-zinc-200 to-gray-300 dark:from-zinc-700 dark:to-gray-800" />

							<CalendarCardOverlay />

							<FavoriteButton />

							<CalendarCardSettings />

							<Link
								to={"/calendar/$id"}
								params={{
									id: `${calendar.id}`,
								}}
								className={
									"size-full absolute inset-0 bg-black opacity-0 focus-visible:opacity-20 transition-opacity"
								}
							/>

							<Footer />
						</div>
					</CalendarContextProvider>
				))}
			</div>
		</CalendarListStates>
	);
};

export { CalendarList };
