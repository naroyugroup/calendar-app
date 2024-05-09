import type React from "react";

export interface CustomInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	placeholder: string;
	value?: string;
	label: string;
	errorMessage?: string;
	enableClearButton?: boolean;
	clearFunc?: () => void;
}
