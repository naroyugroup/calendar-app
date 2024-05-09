import { Account } from "@components/account";
import { Button } from "@components/ui/button";
import { useFullPageCalendar } from "@hooks/use-full-page-calendar";
import dayjs from "dayjs";
import type React from "react";
import { useTranslation } from "react-i18next";
import { FaAngleRight } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

export interface CalendarHeaderProps {
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ setSidebarOpen }) => {
	const { monthIndex, setMonthIndex, setSmallCalendarMonthIdx } =
		useFullPageCalendar();
	const { t } = useTranslation("appCalendarId");
	const handleReset = () => {
		setMonthIndex(dayjs().month());
		setSmallCalendarMonthIdx(dayjs().month());
	};

	const handlePrevMonth = () => {
		setMonthIndex(monthIndex - 1);
	};

	const handleNextMonth = () => {
		setMonthIndex(monthIndex + 1);
	};

	const toggleSidebar = () => {
		setSidebarOpen((open) => !open);
	};

	return (
		<header className="flex items-center gap-x-10 p-2 px-4 overflow-x-auto justify-between xs:min-h-16 min-h-20">
			<div className={"flex items-center gap-x-10"}>
				<Button
					onClick={toggleSidebar}
					variant={"accentGhost"}
					className={"size-18 p-2 aspect-square"}
				>
					<IoMenuSharp size={30} />
				</Button>

				<div className={"flex flex-row items-center gap-x-2.5"}>
					<Button variant={"outline"} onClick={handleReset} className={""}>
						{t("navbar.todayButton")}
					</Button>
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
					<h2 className="text-xl text-gray-700 font-semibold dark:text-gray-300 capitalize whitespace-pre">
						{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
					</h2>
				</div>
			</div>

			<>
				<Account />
			</>
		</header>
	);
};

export { CalendarHeader };
