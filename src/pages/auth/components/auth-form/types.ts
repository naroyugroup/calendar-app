import type React from "react";

export interface AuthFormProps {
	children: React.ReactNode;
	onSubmit?: () => void;
}
