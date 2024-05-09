import { FullPageCalendarContext } from "@context-providers/full-page-calendar";
import type { FullPageCalendarContextValues } from "@context-providers/full-page-calendar/types.ts";
import React from "react";

const useFullPageCalendar = (): FullPageCalendarContextValues => {
	const context = React.useContext(FullPageCalendarContext);

	if (context === null) {
		throw new Error(
			"useFullPageCalendar must be used within a FullPageCalendarContextProvider",
		);
	}

	return context;
};

export { useFullPageCalendar };
