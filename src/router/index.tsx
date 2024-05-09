import { useAuth } from "@hooks/use-auth";
import { routeTree } from "@router/routes.tsx";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import type React from "react";

// Create a new router instance
const router = createRouter({
	routeTree,
	context: {
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		auth: undefined!,
	},
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const RouterComponent: React.FC = () => {
	const auth = useAuth();
	return <RouterProvider router={router} context={{ auth }} />;
};

export { RouterComponent };
