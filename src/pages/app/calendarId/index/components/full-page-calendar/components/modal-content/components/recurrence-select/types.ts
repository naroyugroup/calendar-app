import type React from "react";
export interface RecurrenceSelectProps {
	recurrenceRule: string | undefined;
	setRecurrenceRule: React.Dispatch<React.SetStateAction<string | undefined>>;
	disabled: boolean;
}
