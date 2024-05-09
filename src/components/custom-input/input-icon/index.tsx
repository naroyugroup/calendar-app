import type { InputIconProps } from "@components/custom-input/input-icon/types.ts";
import type React from "react";

const InputIcon: React.FC<InputIconProps> = ({ onClick, children }) => {
	return (
		<button
			type={"button"}
			className={
				"flex items-center justify-center opacity-60 hover:opacity-100 transition absolute top-1/2 transform -translate-y-1/2 right-2 text-muted-foreground"
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export { InputIcon };
