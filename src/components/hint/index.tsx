import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import type { HintProps } from "@components/hint/types.ts";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const Hint: React.FC<HintProps> = ({
	label,
	align,
	alignOffset,
	sideOffset,
	side,
	children,
	className,
	shortcut,
	disabled,
	disableHint,
}) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={100}>
				<TooltipTrigger disabled={disabled} asChild>
					{children}
				</TooltipTrigger>
				<TooltipContent
					className={twMerge(
						"text-white bg-black border-black",
						className,
						disableHint && "hidden",
					)}
					side={side}
					align={align}
					alignOffset={alignOffset}
					sideOffset={sideOffset}
				>
					<p className={"font-semibold"}>
						{label}
						{shortcut && (
							<span className={"text-xs ml-1 text-muted-foreground"}>
								({shortcut})
							</span>
						)}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
