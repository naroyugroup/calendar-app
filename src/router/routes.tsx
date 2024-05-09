import { MenuFilter } from "@/enums";
import type { AuthContextValues } from "@context-providers/auth/types.ts";
import { CalendarIdPage } from "@pages/app/calendarId/index/page.tsx";
import { CalendarIdLayout } from "@pages/app/calendarId/layout.tsx";
import { CalendarsPage } from "@pages/app/calendars/index/page.tsx";
import { CalendarsLayout } from "@pages/app/calendars/layout.tsx";
import { AppLayout } from "@pages/app/layout.tsx";
import { AuthLayout } from "@pages/auth/layout.tsx";
import { LoginPage } from "@pages/auth/login/page.tsx";
import { RegisterPage } from "@pages/auth/register/page.tsx";
import { RootIndexPage } from "@pages/index/page.tsx";
import { RootLayout } from "@pages/layout.tsx";
import { RootLayoutNotFound } from "@pages/not-found.tsx";
import {
	createRootRouteWithContext,
	createRoute,
	redirect,
} from "@tanstack/react-router";
import {
	authLayoutRouteSearchSchema,
	calendarsRouteSearchSchema,
} from "./router-schemas.ts";

interface MyRouterContext {
	auth: AuthContextValues;
}

// * Root
export const rootLayoutRoute = createRootRouteWithContext<MyRouterContext>()({
	component: RootLayout,
	notFoundComponent: RootLayoutNotFound,
});

export const rootIndexRoute = createRoute({
	getParentRoute: () => rootLayoutRoute,
	path: "/",
	beforeLoad: () => {
		throw redirect({ to: "/login" });
	},
	component: RootIndexPage,
});

// * Auth
export const authLayoutRoute = createRoute({
	getParentRoute: () => rootLayoutRoute,
	id: "auth",
	component: AuthLayout,
	notFoundComponent: RootLayoutNotFound,
	validateSearch: authLayoutRouteSearchSchema,
	beforeLoad: ({ context, search }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({
				to: search.redirect || "/calendars",
				search: !search.redirect ? { filter: MenuFilter.All } : undefined,
			});
		}
	},
});

export const loginRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/login",
	component: LoginPage,
});

export const registerRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/register",
	component: RegisterPage,
});

// * App
export const appLayoutRoute = createRoute({
	getParentRoute: () => rootLayoutRoute,
	id: "app-layout",
	component: AppLayout,
	beforeLoad: ({ context, location }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.href,
				},
			});
		}
	},
});

// * Calendars
export const calendarsLayoutRoute = createRoute({
	getParentRoute: () => appLayoutRoute,
	id: "calendars-layout",
	component: CalendarsLayout,
	notFoundComponent: RootLayoutNotFound,
});

export const calendarsRoute = createRoute({
	getParentRoute: () => calendarsLayoutRoute,
	path: "/calendars",
	validateSearch: calendarsRouteSearchSchema,
	component: CalendarsPage,
});

// * CalendarId
export const calendarIdLayoutRoute = createRoute({
	getParentRoute: () => appLayoutRoute,
	id: "calendar-id-layout",
	component: CalendarIdLayout,
	notFoundComponent: RootLayoutNotFound,
});

export const calendarIdRoute = createRoute({
	getParentRoute: () => calendarIdLayoutRoute,
	// loader: ({ params }) => {
	// 	console.log(params);
	// },
	path: "/calendar/$id",
	component: CalendarIdPage,
});

export const routeTree = rootLayoutRoute.addChildren([
	rootIndexRoute,
	authLayoutRoute.addChildren([registerRoute, loginRoute]),
	appLayoutRoute.addChildren([
		calendarsLayoutRoute.addChildren([calendarsRoute]),
		calendarIdLayoutRoute.addChildren([calendarIdRoute]),
	]),
]);
