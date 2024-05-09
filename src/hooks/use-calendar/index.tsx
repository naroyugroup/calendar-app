import { CalendarContext } from "@context-providers/calendars";
import type { CalendarContextValues } from "@context-providers/calendars/types.ts";
import React from "react";

const useCalendar = (): CalendarContextValues => {
	const context = React.useContext(CalendarContext);

	if (context === null) {
		throw new Error(
			"useCalendar must be used within a CalendarContextProvider",
		);
	}

	return context;
};

export { useCalendar };
