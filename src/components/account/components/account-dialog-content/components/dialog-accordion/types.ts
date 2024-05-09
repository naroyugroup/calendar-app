import type React from "react";
import type { IconType } from "react-icons";

export interface DialogAccordionProps {
	children: React.ReactNode;
	icon: IconType;
	title: string;
}
