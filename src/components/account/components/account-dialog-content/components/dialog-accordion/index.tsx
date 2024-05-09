import type { DialogAccordionProps } from "@components/account/components/account-dialog-content/components/dialog-accordion/types.ts";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@components/ui/accordion";
import { Separator } from "@components/ui/separator";
import type React from "react";

const DialogAccordion: React.FC<DialogAccordionProps> = ({
	children,
	icon: Icon,
	title,
}) => {
	return (
		<Accordion type="single" collapsible className={"w-full"}>
			<AccordionItem value="item-1" className={"border-none justify-center"}>
				<AccordionTrigger
					className={"hover:bg-secondary rounded-md px-3 hover:no-underline"}
				>
					<div className={"flex flex-row items-center gap-x-3"}>
						<Icon size={23} />
						{title}
					</div>
				</AccordionTrigger>
				<Separator className={"mx-3 flex-1 w-[unset]"} />
				<AccordionContent className={"pb-3 pt-1.5 gap-y-2 flex flex-col"}>
					{children}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export { DialogAccordion };
