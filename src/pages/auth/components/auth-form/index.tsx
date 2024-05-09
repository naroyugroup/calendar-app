import type { AuthFormProps } from "@pages/auth/components/auth-form/types.ts";
import type React from "react";

const AuthForm: React.FC<AuthFormProps> = ({ children, onSubmit }) => {
	return (
		<form className={"flex flex-col gap-y-4"} onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export { AuthForm };
