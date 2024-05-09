import type { FormErrorProps } from "@components/ui/form-error/types.ts";
import { cn } from "@lib/utils.ts";
import * as React from "react";

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
	({ className, children, ...props }, ref) => {
		return (
			<p
				ref={ref}
				className={cn(
					"text-destructive text-sm font-semibold break-words h-full animate-slide-top",
					className,
				)}
				{...props}
			>
				{children}
			</p>
		);
	},
);
FormError.displayName = "FormError";

export { FormError };
