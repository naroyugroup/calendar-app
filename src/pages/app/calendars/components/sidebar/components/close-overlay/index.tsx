import { useSidebarMenuContext } from "@hooks/use-sidebar-menu-context";
import type React from "react";

const CloseOverlay: React.FC = () => {
	const { setSidebarIsOpen, sidebarIsOpen } = useSidebarMenuContext();

	const closeMenu = () => {
		setSidebarIsOpen(false);
	};

	return (
		<div
			onClick={closeMenu}
			className={`md:hidden fixed inset-0 max-h-screen bg-black/50 ${
				sidebarIsOpen ? "block" : "hidden"
			}`}
		/>
	);
};

export { CloseOverlay };
