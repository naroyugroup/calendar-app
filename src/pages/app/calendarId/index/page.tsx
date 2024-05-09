import { FullPageCalendarContextProvider } from "@context-providers/full-page-calendar";
import { FullPageCalendar } from "@pages/app/calendarId/index/components/full-page-calendar";

const CalendarIdPage = () => {
	return (
		<FullPageCalendarContextProvider>
			<FullPageCalendar />
		</FullPageCalendarContextProvider>
	);
};

export { CalendarIdPage };
