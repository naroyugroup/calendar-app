import type { ButtonProps } from "@components/ui/button/types.ts";
import { buttonVariants } from "@components/ui/button/variants.ts";
import { cn } from "@lib/utils.ts";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button };
