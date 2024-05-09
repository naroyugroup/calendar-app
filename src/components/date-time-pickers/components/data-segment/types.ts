import type { DateSegment as IDateSegment } from "@react-stately/datepicker";
import type { DateFieldState } from "react-stately";

export interface DateSegmentProps {
	segment: IDateSegment;
	state: DateFieldState;
}
