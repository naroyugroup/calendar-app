import type React from "react";
import type { IconType } from "react-icons";

export interface EmptyStateProps {
	header: string;
	subheader: string;
	imageSrc?: string;
	alt?: string;
	height?: number;
	width?: number;
	children?: React.ReactNode;
	icon?: IconType;
}
