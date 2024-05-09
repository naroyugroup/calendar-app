import type { DividerProps } from "@pages/auth/components/divider/types.ts";
import type React from "react";

const Divider: React.FC<DividerProps> = ({ label }) => {
	return (
		<div className="flex items-center w-full">
			<hr className="flex-grow border-t border-gray-300" />
			<span className="px-3 text-gray-500 text-sm">{label}</span>
			<hr className="flex-grow border-t border-gray-300" />
		</div>
	);
};

export { Divider };
