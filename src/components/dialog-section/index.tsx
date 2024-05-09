import type { DialogSectionProps } from "@components/dialog-section/types.ts";
import { Separator } from "@components/ui/separator";
import type React from "react";

const DialogSection: React.FC<DialogSectionProps> = ({ children, title }) => {
	return (
		<div className={"gap-y-1 flex flex-col"}>
			<h1 className={"font-semibold text-lg"}>{title}</h1>
			<Separator />

			{children}
		</div>
	);
};

export { DialogSection };
