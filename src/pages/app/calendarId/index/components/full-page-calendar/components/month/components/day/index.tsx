import { DAYJS_DATE_FORMAT } from "@/consts.ts";
import { useFullPageCalendar } from "@hooks/use-full-page-calendar";
import { cn } from "@lib/utils.ts";
import dayjs from "dayjs";
import type React from "react";
import type { DayProps } from "./types.ts";

const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
	const {
		setSelectedDay,
		selectedDay,
		events,
		setDialogOpen,
		setSelectedEvent,
	} = useFullPageCalendar();

	return (
		<div
			className="flex-1 cursor-pointer border-t border-l flex flex-col"
			onClick={() => {
				setSelectedDay(day);
				setDialogOpen(true);
			}}
		>
			<header className="flex flex-col items-center mx-2 mt-0.5">
				{rowIdx === 0 && (
					<p className="text-sm">{day.format("ddd").toUpperCase()}</p>
				)}
				<p
					className={cn(
						"text-sm text-center rounded-md w-7 p-0.5",
						// calculateSelectedMonth(day) !== monthIndex && "opacity-50",
						day.format("DD-MM-YY") === selectedDay.format("DD-MM-YY") &&
							"bg-blue-300",
						day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") &&
							"bg-blue-600 text-white",
					)}
				>
					{day.format("DD")}
				</p>
			</header>
			<div className={"py-1 px-2"}>
				{events?.map((event) => {
					if (event.period.startDate !== day.format(DAYJS_DATE_FORMAT))
						return null;
					return (
						<div
							key={event.id}
							onClick={(e) => {
								e.stopPropagation();
								setSelectedDay(day);
								setSelectedEvent(event);
								setDialogOpen(true);
							}}
							className={
								"text-white font-semibold text-sm rounded mb-1 truncate bg-indigo-500 px-1 py-1 w-full"
							}
						>
							{event.summary}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export { Day };
