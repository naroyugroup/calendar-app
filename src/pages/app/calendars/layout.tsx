import { SidebarMenuContextProvider } from "@context-providers/sidebar-menu";
import { Sidebar } from "@pages/app/calendars/components/sidebar";
import { Outlet, useRouterState } from "@tanstack/react-router";
import type React from "react";
const CalendarsLayout: React.FC = () => {
	const router = useRouterState();

	return (
		<SidebarMenuContextProvider>
			<main className={"h-screen w-full flex flex-row"}>
				{router.location.pathname === "/calendars" && <Sidebar />}
				<Outlet />
			</main>
		</SidebarMenuContextProvider>
	);
};

export { CalendarsLayout };
