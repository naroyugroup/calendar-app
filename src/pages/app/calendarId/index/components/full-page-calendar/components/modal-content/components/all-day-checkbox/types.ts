import type { CheckedState } from "@radix-ui/react-checkbox";
import type React from "react";

export interface AllDayCheckboxProps {
	isAllDayEvent: CheckedState;
	setIsAllDayEvent: React.Dispatch<React.SetStateAction<CheckedState>>;
	disabled: boolean;
}
