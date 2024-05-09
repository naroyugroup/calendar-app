import { cn } from "@/lib/utils";
import type { DateFieldProps } from "@components/date-time-pickers/components/date-field/types.ts";
import { createCalendar } from "@internationalized/date";
import type React from "react";
import { useRef } from "react";
import { useDateField, useLocale } from "react-aria";
import { useDateFieldState } from "react-stately";
import { DateSegment } from "../data-segment";

const DateField: React.FC<DateFieldProps> = (props) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const { locale } = useLocale();
	const state = useDateFieldState({
		...props,
		locale,
		createCalendar,
	});
	const { fieldProps } = useDateField(props, state, ref);

	return (
		<div
			{...fieldProps}
			ref={ref}
			className={cn(
				"inline-flex h-10 flex-1 items-center rounded-l-md border border-r-0 border-input bg-accent py-2 pl-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				props.isDisabled && "cursor-not-allowed opacity-50",
				props.isMuted && "cursor-default opacity-100",
			)}
		>
			{state.segments.map((segment, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<DateSegment key={i} segment={segment} state={state} />
			))}
			{/*{state.validationState === "invalid" && (*/}
			{/*	<span aria-hidden="true">🚫</span>*/}
			{/*)}*/}
		</div>
	);
};

export { DateField };
