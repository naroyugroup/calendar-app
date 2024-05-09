import React, { useEffect, useState } from "react";
import type {
	CalendarContextProviderProps,
	CalendarContextValues,
} from "./types.ts";
export const CalendarContext =
	React.createContext<CalendarContextValues | null>(null);

const CalendarContextProvider: React.FC<CalendarContextProviderProps> = ({
	children,
	calendar: initialCalendar,
}) => {
	const [calendar, setCalendar] = useState(initialCalendar);

	useEffect(() => {
		setCalendar(initialCalendar);
	}, [initialCalendar]);

	return (
		<CalendarContext.Provider value={{ calendar }}>
			{children}
		</CalendarContext.Provider>
	);
};

export { CalendarContextProvider };
