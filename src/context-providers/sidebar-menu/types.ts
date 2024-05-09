import type React from "react";

export interface SidebarMenuContextValues {
	sidebarIsOpen: boolean;
	setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMediumScreen: boolean;
}

export interface SidebarMenuContextProviderProps {
	children: React.ReactNode;
}
