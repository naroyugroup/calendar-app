import { Button } from "@components/ui/button";
import { cn } from "@lib/utils.ts";
import type { AttendeeListProps } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/attendee-list/types.ts";
import { X } from "lucide-react";
import type React from "react";

const AttendeeList: React.FC<AttendeeListProps> = ({
	attendees,
	setAttendees,
	onAttendeesSet,
	disabled,
}) => {
	return (
		<div className={"flex flex-row gap-2"}>
			{attendees.map((attendee) => {
				return (
					<div
						key={attendee}
						className={cn(
							"bg-muted w-max p-2 px-3 text-xs rounded-md flex flex-row justify-center items-center gap-x-2",
							disabled && "opacity-50",
						)}
					>
						{attendee}
						<Button
							type={"button"}
							disabled={disabled}
							variant={"accentGhost"}
							className={"size-fit p-1"}
							onClick={() => {
								setAttendees((prevState) => {
									const freshData = prevState.filter(
										(item) => item !== attendee,
									);
									onAttendeesSet(freshData);
									return freshData;
								});
							}}
						>
							<X size={12} />
						</Button>
					</div>
				);
			})}
		</div>
	);
};

export { AttendeeList };
