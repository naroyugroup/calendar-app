import type React from "react";

const CalendarCardOverlay: React.FC = () => {
	return (
		<div
			className={
				"absolute top-0 left-0 opacity-5 group-hover:opacity-20 transition-opacity h-full w-full bg-black"
			}
		/>
	);
};

export { CalendarCardOverlay };
