import { Hint } from "@components/hint";
import { Button } from "@components/ui/button";
import { useSidebarMenuContext } from "@hooks/use-sidebar-menu-context";
import { cn } from "@lib/utils.ts";
import type { SectionButtonProps } from "@pages/app/calendars/components/sidebar/components/menu-content/components/section/components/section-button/types.ts";
import React from "react";

const SectionButton = React.forwardRef<HTMLButtonElement, SectionButtonProps>(
	({ children, variant, className, label, ...props }, ref) => {
		const { isMediumScreen, sidebarIsOpen, setSidebarIsOpen } =
			useSidebarMenuContext();

		const closeMenuIfMobile = (e: React.PointerEvent) => {
			if (isMediumScreen && e.button === 0) setSidebarIsOpen(false);
		};

		return (
			<Hint
				side={"right"}
				sideOffset={14}
				label={label}
				disableHint={isMediumScreen || sidebarIsOpen}
			>
				<Button
					ref={ref}
					size={"lg"}
					onPointerDown={closeMenuIfMobile}
					className={cn(
						"font-normal justify-start px-3 w-full flex-row flex gap-x-5",
						className,
					)}
					variant={variant ? variant : "accentGhost"}
					{...props}
				>
					{children}
					{label}
				</Button>
			</Hint>
		);
	},
);

SectionButton.displayName = "SectionButton";

export { SectionButton };
