import { cn } from "@lib/utils.ts";
import { SmallCalendar } from "@pages/app/calendarId/index/components/full-page-calendar/components/calendar-sidebar/components/small-calendar";
import type React from "react";

export interface CalendarSidebarProps {
	sidebarOpen: boolean;
}

const CalendarSidebar: React.FC<CalendarSidebarProps> = ({ sidebarOpen }) => {
	// const {monthIndex} = useFullPageCalendar()
	// const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<aside
			className={cn(
				"w-0 transition-[width] duration-300 flex-col overflow-x-hidden border-t flex items-center ",
				sidebarOpen && "w-[15rem]",
			)}
		>
			<SmallCalendar />
			{/*<Calendar*/}
			{/*	showOutsideDays*/}
			{/*	mode="single"*/}
			{/*	required*/}
			{/*	selected={date}*/}
			{/*	onSelect={setDate}*/}
			{/*	className=""*/}
			{/*/>*/}
		</aside>
	);
};

export { CalendarSidebar };
