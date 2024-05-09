import { useCalendar } from "@hooks/use-calendar";
import type React from "react";
import { InvitedUsers } from "./components/invited-users";

const Footer: React.FC = () => {
	const { calendar } = useCalendar();
	return (
		<div
			className={
				"relative bg-accent min-h-11 xl:min-h-[3.25rem] p-2 xl:p-3 flex flex-row justify-between gap-x-4"
			}
		>
			<p className={"text-[13px] truncate"}>{calendar.summary}</p>
			<InvitedUsers />
		</div>
	);
};

export { Footer };
