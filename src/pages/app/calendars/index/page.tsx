import { CalendarList } from "@pages/app/calendars/index/components/calendar-list";
import { CreateNewCalendarButton } from "@pages/app/calendars/index/components/create-new-calendar-button";
import { Header } from "@pages/app/calendars/index/components/header";
import { Navbar } from "@pages/app/calendars/index/components/navbar";
import type React from "react";
import { useDeferredValue, useState } from "react";

const CalendarsPage: React.FC = () => {
	const [searchValue, setSearchValue] = useState("");
	const deferredValue = useDeferredValue(searchValue);

	return (
		<div
			className={
				"relative px-5 md:px-10 md:pt-5 pt-2 flex-1 overflow-y-auto flex flex-col"
			}
		>
			<Navbar searchValue={searchValue} setSearchValue={setSearchValue} />

			<Header />

			<CalendarList searchValue={deferredValue} />

			<CreateNewCalendarButton />
		</div>
	);
};

export { CalendarsPage };
