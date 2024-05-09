import { cn } from "@lib/utils.ts";
import type { SectionProps } from "@pages/app/calendars/components/sidebar/components/menu-content/components/section/types.ts";
import type React from "react";

const Section: React.FC<SectionProps> = ({ children, className }) => {
	return (
		<ul
			className={cn(
				"whitespace-pre px-2.5 py-5 flex flex-col gap-1 font-medium",
				className,
			)}
		>
			{children}
		</ul>
	);
};

export { Section };
