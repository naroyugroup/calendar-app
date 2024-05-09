import type { buttonVariants } from "@components/ui/button/variants.ts";
import type { VariantProps } from "class-variance-authority";
import type React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}
