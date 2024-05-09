import type { DateValue } from "react-aria";
import type { DatePickerStateOptions } from "react-stately";

export interface DateTimePickerProps extends DatePickerStateOptions<DateValue> {
	inputFieldDisabled?: boolean;
	inputFieldDisabledMuted?: boolean;
}
