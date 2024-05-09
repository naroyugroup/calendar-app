import { Hint } from "@components/hint";
import { Button } from "@components/ui/button";
import type { HintButtonProps } from "@pages/app/calendars/index/components/create-new-calendar-button/components/hint-button/types.ts";
import { Plus } from "lucide-react";
import React from "react";

const HintButton = React.forwardRef<HTMLButtonElement, HintButtonProps>(
	({ label, ...props }, ref) => {
		return (
			<Button
				ref={ref}
				type={"button"}
				variant={"none"}
				className="bg-black/25 size-10 rounded-md flex items-center justify-center opacity-75 hover:opacity-100 transition fixed md:right-10 right-5 bottom-2 md:bottom-6 p-0"
				{...props}
			>
				<Hint side={"left"} sideOffset={10} label={label}>
					<Plus className={"text-white size-full p-1.5"} />
				</Hint>
			</Button>
		);
	},
);

HintButton.displayName = "HintButton";

export { HintButton };
