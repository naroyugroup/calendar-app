import { Button } from "@components/ui/button";
import { useFullPageCalendar } from "@hooks/use-full-page-calendar";
import { calculateSelectedMonth, cn, getMonth } from "@lib/utils.ts";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const SmallCalendar: React.FC = () => {
	const [currentMonthMatrix, setCurrentMonthMatrix] = useState(getMonth());

	const {
		setMonthIndex,
		setSelectedDay,
		selectedDay,
		smallCalendarMonthIdx,
		setSmallCalendarMonthIdx,
	} = useFullPageCalendar();

	const handlePrevMonth = () => {
		setSmallCalendarMonthIdx((currentMonthIdx) => currentMonthIdx - 1);
	};
	const handleNextMonth = () => {
		setSmallCalendarMonthIdx((currentMonthIdx) => currentMonthIdx + 1);
	};

	useEffect(() => {
		setCurrentMonthMatrix(getMonth(smallCalendarMonthIdx));
	}, [smallCalendarMonthIdx]);

	return (
		<div className="p-3">
			<header className="flex justify-between whitespace-pre items-center">
				<p className="text-gray-700 font-semibold dark:text-gray-300 capitalize">
					{dayjs(new Date(dayjs().year(), smallCalendarMonthIdx)).format(
						"MMMM YYYY",
					)}
				</p>
				<div>
					<Button
						variant={"accentGhost"}
						onClick={handlePrevMonth}
						className={"p-2 size-17"}
					>
						<FaAngleRight size={15} className={"rotate-180"} />
					</Button>
					<Button
						variant={"accentGhost"}
						onClick={handleNextMonth}
						className={"p-2 size-17"}
					>
						<FaAngleRight size={15} />
					</Button>
				</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6">
				{currentMonthMatrix[0].map((day, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<span key={i} className="text-sm text-center py-0.5 capitalize">
						{day.format("dd").charAt(0)}
					</span>
				))}
				{currentMonthMatrix.map((row, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<React.Fragment key={i}>
						{row.map((day, idx) => (
							<Button
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={idx}
								variant={"accentGhost"}
								onClick={() => {
									setSmallCalendarMonthIdx(calculateSelectedMonth(day));
									setMonthIndex(calculateSelectedMonth(day));
									setSelectedDay(day);
								}}
								className={cn(
									"py-0 size-8 aspect-square flex items-center justify-center",
									calculateSelectedMonth(day) !== smallCalendarMonthIdx &&
										"opacity-50",
									day.format("DD-MM-YY") === selectedDay.format("DD-MM-YY") &&
										"bg-blue-300 hover:bg-blue-400",
									day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") &&
										"bg-blue-600 text-white hover:bg-blue-700 hover:text-white",
								)}
							>
								<span className="text-sm">{day.format("D")}</span>
							</Button>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export { SmallCalendar };
