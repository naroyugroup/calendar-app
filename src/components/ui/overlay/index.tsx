import type { OverlayProps } from "@components/ui/overlay/types.ts";
import { cn } from "@lib/utils.ts";
import * as React from "react";

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("absolute w-full h-full bg-transparent z-50", className)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
Overlay.displayName = "Overlay";

export { Overlay };
