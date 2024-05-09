import { cn } from "@/lib/utils";
import { Calendar } from "@components/date-time-pickers/components/calendar";
import { DateField } from "@components/date-time-pickers/components/date-field";
import { TimeField } from "@components/date-time-pickers/components/time-field";
import type { DateTimePickerProps } from "@components/date-time-pickers/date-time-picker/types.ts";
import { Button } from "@components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/ui/popover";
import { useForwardedRef } from "@hooks/use-forward-ref";
import { CalendarIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { useButton, useDatePicker, useInteractOutside } from "react-aria";
import { useDatePickerState } from "react-stately";

const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>(
	({ inputFieldDisabled, inputFieldDisabledMuted, ...props }, forwardedRef) => {
		const ref = useForwardedRef(forwardedRef);
		const buttonRef = useRef<HTMLButtonElement | null>(null);
		const contentRef = useRef<HTMLDivElement | null>(null);

		const [open, setOpen] = useState(false);

		const state = useDatePickerState(props);
		const {
			groupProps,
			fieldProps,
			buttonProps: _buttonProps,
			dialogProps,
			calendarProps,
		} = useDatePicker(props, state, ref);
		const { buttonProps } = useButton(_buttonProps, buttonRef);
		useInteractOutside({
			ref: contentRef,
			onInteractOutside: () => {
				setOpen(false);
			},
		});

		return (
			<div
				{...groupProps}
				ref={ref}
				className={cn(
					groupProps.className,
					"flex items-center rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
				)}
			>
				<DateField
					{...fieldProps}
					isDisabled={inputFieldDisabled}
					isMuted={inputFieldDisabledMuted}
				/>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							{...buttonProps}
							variant="outline"
							className="rounded-l-none bg-accent"
							disabled={props.isDisabled}
							onClick={() => setOpen(true)}
						>
							<CalendarIcon className="h-5 w-5" />
						</Button>
					</PopoverTrigger>
					<PopoverContent ref={contentRef} className="w-full">
						<div {...dialogProps} className="space-y-3">
							<Calendar {...calendarProps} />
							{state.hasTime && (
								<TimeField
									label={"Time Field"}
									value={state.timeValue}
									onChange={state.setTimeValue}
								/>
							)}
						</div>
					</PopoverContent>
				</Popover>
			</div>
		);
	},
);

DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker };
