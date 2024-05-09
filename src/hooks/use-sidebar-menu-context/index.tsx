import { SidebarMenuContext } from "@/context-providers/sidebar-menu";
import type { SidebarMenuContextValues } from "@/context-providers/sidebar-menu/types.ts";
import React from "react";

const useSidebarMenuContext = (): SidebarMenuContextValues => {
	const context = React.useContext(SidebarMenuContext);

	if (context === null) {
		throw new Error(
			"useSidebarMenuContext must be used within a SidebarMenuContextProvider",
		);
	}

	return context;
};

export { useSidebarMenuContext };
