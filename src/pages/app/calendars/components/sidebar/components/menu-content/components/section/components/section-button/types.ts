import type { ButtonProps } from "@components/ui/button/types.ts";
import type React from "react";

export interface SectionButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: ButtonProps["variant"];
	className?: string;
	label: string;
}
