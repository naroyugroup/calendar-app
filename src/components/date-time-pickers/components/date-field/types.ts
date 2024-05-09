import type { AriaDatePickerProps, DateValue } from "react-aria";

export interface DateFieldProps extends AriaDatePickerProps<DateValue> {
	isMuted?: boolean;
}
