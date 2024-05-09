import type React from "react";
import { CalendarDanger } from "./calendar-danger";
import { CalendarEdit } from "./calendar-edit";
import type { CalendarSettingsProps } from "./types.ts";

const CalendarSettings: React.FC<CalendarSettingsProps> = ({ contentOpen }) => {
	return (
		<>
			<CalendarEdit contentOpen={contentOpen} />
			<CalendarDanger />
		</>
	);
};

export { CalendarSettings };
