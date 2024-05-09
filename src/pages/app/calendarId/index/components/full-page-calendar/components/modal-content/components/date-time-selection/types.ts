import type { SelectedDateTime } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/types.ts";
import type { CheckedState } from "@radix-ui/react-checkbox";
import type React from "react";

export interface DateTimeSelectionProps {
	isAllDayEvent: CheckedState;
	setSelectedDateTime: React.Dispatch<React.SetStateAction<SelectedDateTime>>;
	selectedDateTime: SelectedDateTime;
	disabled: boolean;
}
