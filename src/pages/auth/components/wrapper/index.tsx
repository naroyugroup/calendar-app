import { cn } from "@lib/utils.ts";
import type { WrapperProps } from "@pages/auth/components/wrapper/types.ts";
import type React from "react";

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
	return (
		<div
			className={cn(
				"container flex flex-col justify-center h-screen space-y-6 w-full max-w-sm",
				className,
			)}
		>
			{children}
		</div>
	);
};
export { Wrapper };
