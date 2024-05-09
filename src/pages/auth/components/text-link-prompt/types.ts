import { routeTree } from "@/router/routes";
import type { RoutePaths } from "@tanstack/react-router";

export interface TextLinkPromptProps {
	linkLabel: string;
	text: string;
	to: RoutePaths<typeof routeTree>;
}
