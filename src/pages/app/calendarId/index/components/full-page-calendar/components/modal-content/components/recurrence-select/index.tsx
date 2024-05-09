import { Recurrence } from "@/enums";
import { Button } from "@components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/ui/popover";
import { recurrenceSelectValues } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/recurrence-select/data.ts";
import type { RecurrenceSelectProps } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/recurrence-select/types.ts";
import { ChevronsUpDown } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { RRule } from "rrule";

const RecurrenceSelect: React.FC<RecurrenceSelectProps> = ({
	setRecurrenceRule,
	recurrenceRule,
	disabled,
}) => {
	const [selectedRecurrence, setSelectedRecurrence] = useState<Recurrence>(
		Recurrence.DoesNotRepeat,
	);

	useEffect(() => {
		const match = recurrenceRule?.match(/FREQ=([^;]+)/);
		const frequency = match ? match[1] : undefined;

		switch (frequency) {
			case "DAILY":
				setSelectedRecurrence(Recurrence.Daily);
				return;
			case "WEEKLY":
				setSelectedRecurrence(Recurrence.Weekly);
				return;
			case "MONTHLY":
				setSelectedRecurrence(Recurrence.Monthly);
				return;
			case "YEARLY":
				setSelectedRecurrence(Recurrence.Yearly);
				return;
			default:
				setSelectedRecurrence(Recurrence.DoesNotRepeat);
				return;
		}
	}, [recurrenceRule]);

	const mapRecurrenceToRRule = (recurrence: Recurrence) => {
		switch (recurrence) {
			case Recurrence.DoesNotRepeat:
				return undefined;
			case Recurrence.Daily:
				return RRule.DAILY;
			case Recurrence.Monthly:
				return RRule.MONTHLY;
			case Recurrence.Weekly:
				return RRule.WEEKLY;
			case Recurrence.Yearly:
				return RRule.YEARLY;
			default:
				return undefined;
		}
	};

	const [popoverOpen, setPopoverOpen] = useState(false);

	return (
		<Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
			<PopoverTrigger asChild>
				<Button
					disabled={disabled}
					variant="outline"
					role="combobox"
					className="w-40 justify-between"
				>
					{
						recurrenceSelectValues.find(
							(rec) => rec.value === selectedRecurrence,
						)?.label
					}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-48 p-0">
				<Command>
					<CommandInput placeholder={"search"} />
					<CommandList>
						<CommandEmpty>Empty</CommandEmpty>
						<CommandGroup>
							{recurrenceSelectValues.map((recurrence) => {
								return (
									<CommandItem
										key={recurrence.value}
										value={recurrence.value}
										onSelect={(selectedValue) => {
											const ruleFreq = mapRecurrenceToRRule(
												selectedValue as Recurrence,
											);
											setRecurrenceRule(
												ruleFreq !== undefined
													? new RRule({
															freq: ruleFreq,
														}).toString()
													: undefined,
											);
											setPopoverOpen(false);
											setSelectedRecurrence(selectedValue as Recurrence);
										}}
									>
										{recurrence.label}
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export { RecurrenceSelect };
