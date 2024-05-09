import type { IconsWrapperProps } from "@pages/auth/components/icons-wrapper/types.ts";
import type React from "react";

const IconsWrapper: React.FC<IconsWrapperProps> = ({ children }) => {
	return <div className={"flex flex-row gap-x-2"}>{children}</div>;
};

export { IconsWrapper };
