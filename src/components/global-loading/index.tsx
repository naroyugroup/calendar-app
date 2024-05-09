import { CalendarDays } from "lucide-react";
import type React from "react";

const GlobalLoading: React.FC = () => {
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center">
			<CalendarDays className={"animate-pulse duration-700"} size={100} />
		</div>
	);
};

export { GlobalLoading };
