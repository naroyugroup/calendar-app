import type { DialogActionButtonProps } from "@components/dialog-action-button/types.ts";
import { Button } from "@components/ui/button";
import type React from "react";
import { FaArrowRight } from "react-icons/fa";

const DialogActionButton: React.FC<DialogActionButtonProps> = ({
	title,
	onClick,
	disabled,
}) => {
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			variant={"accentGhost"}
			className={
				"group justify-between text-foreground/80 hover:text-foreground px-8"
			}
		>
			+ {title}
			<FaArrowRight
				size={13}
				className={
					"opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-foreground/80 group-hover:text-foreground"
				}
			/>
		</Button>
	);
};

export { DialogActionButton };
