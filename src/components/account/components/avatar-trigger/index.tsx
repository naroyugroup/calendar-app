import type { AvatarTriggerProps } from "@components/account/components/avatar-trigger/types.ts";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { PopoverTrigger } from "@components/ui/popover";
import type React from "react";

const AvatarTrigger: React.FC<AvatarTriggerProps> = ({
	fallbackLabel,
	image,
}) => {
	return (
		<PopoverTrigger className={"rounded-full data-[state=open]:ring-2"}>
			<Avatar className={"md:size-11 size-9"}>
				<AvatarImage src={image} />
				<AvatarFallback
					className={"bg-primary/90 text-primary-foreground font-semibold"}
				>
					{fallbackLabel}
				</AvatarFallback>
			</Avatar>
		</PopoverTrigger>
	);
};

export { AvatarTrigger };
