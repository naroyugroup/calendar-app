import type { TooltipContentProps } from "@radix-ui/react-tooltip";
import type React from "react";

export interface HintProps {
	label: string;
	children: React.ReactNode;
	shortcut?: string;
	side?: TooltipContentProps["side"];
	align?: TooltipContentProps["align"];
	sideOffset?: TooltipContentProps["sideOffset"];
	alignOffset?: TooltipContentProps["alignOffset"];
	className?: string;
	disabled?: boolean;
	disableHint?: boolean;
}
