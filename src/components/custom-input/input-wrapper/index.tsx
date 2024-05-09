import type { InputWrapperProps } from "@components/custom-input/input-wrapper/types.ts";
import { cn } from "@lib/utils.ts";
import React from "react";

const InputWrapper = React.forwardRef<HTMLDivElement, InputWrapperProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("w-full grid gap-y-1.5 relative", className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
InputWrapper.displayName = "InputWrapper";

export { InputWrapper };
