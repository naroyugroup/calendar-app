import { cn } from "@lib/utils.ts";
import type React from "react";
import type { ContainerProps } from "./types.ts";

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return <div className={cn("px-9", className)}>{children}</div>;
};

export { Container };
