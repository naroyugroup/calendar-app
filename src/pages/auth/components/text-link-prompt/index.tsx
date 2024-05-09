import type { TextLinkPromptProps } from "@pages/auth/components/text-link-prompt/types.ts";
import { Link } from "@tanstack/react-router";
import type React from "react";

const TextLinkPrompt: React.FC<TextLinkPromptProps> = ({
	linkLabel,
	text,
	to,
}) => {
	return (
		<div className={"w-full flex flex-row justify-center"}>
			<p className={"text-sm text-muted-foreground"}>{text}</p>
			<Link to={to} className={"ml-2 text-sm default-link"}>
				{linkLabel}
			</Link>
		</div>
	);
};
export { TextLinkPrompt };
