import { useSidebarMenuContext } from "@hooks/use-sidebar-menu-context";
import { cn } from "@lib/utils.ts";
import { CloseArrow } from "@pages/app/calendars/components/sidebar/components/close-arrow";
import { CloseOverlay } from "@pages/app/calendars/components/sidebar/components/close-overlay";
import { Header } from "@pages/app/calendars/components/sidebar/components/header";
import { MediumScreenMenuButton } from "@pages/app/calendars/components/sidebar/components/medium-screen-menu-button";
import { MenuContent } from "@pages/app/calendars/components/sidebar/components/menu-content";
import type React from "react";

const Sidebar: React.FC = () => {
	const { sidebarIsOpen } = useSidebarMenuContext();

	return (
		<aside className={"fixed md:relative z-40"}>
			<CloseOverlay />
			<div
				className={cn(
					"h-screen bg-accent shadow-xl max-w-[16rem] md:w-[4rem] w-0 md:relative absolute transition-[width] duration-300 flex flex-col overflow-x-hidden",
					sidebarIsOpen && "md:w-[16rem] w-[16rem]",
				)}
			>
				<Header />

				<MenuContent />

				<CloseArrow />
			</div>
			<MediumScreenMenuButton />
		</aside>
	);
};

export { Sidebar };
