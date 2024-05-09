import { MEDIUM_SCREEN_PX } from "@/consts.ts";
import type {
	SidebarMenuContextProviderProps,
	SidebarMenuContextValues,
} from "@/context-providers/sidebar-menu/types.ts";
import { useDeviceParams } from "@hooks/use-device-params";
import React from "react";

export const SidebarMenuContext =
	React.createContext<SidebarMenuContextValues | null>(null);

export const SidebarMenuContextProvider: React.FC<
	SidebarMenuContextProviderProps
> = ({ children }) => {
	const { width } = useDeviceParams();
	const [sidebarIsOpen, setSidebarIsOpen] = React.useState(
		width >= MEDIUM_SCREEN_PX,
	);

	React.useEffect(() => {
		width < MEDIUM_SCREEN_PX ? setSidebarIsOpen(false) : setSidebarIsOpen(true);
	}, [width]);

	return (
		<SidebarMenuContext.Provider
			value={{
				isMediumScreen: width < MEDIUM_SCREEN_PX,
				setSidebarIsOpen: setSidebarIsOpen,
				sidebarIsOpen: sidebarIsOpen,
			}}
		>
			{children}
		</SidebarMenuContext.Provider>
	);
};
