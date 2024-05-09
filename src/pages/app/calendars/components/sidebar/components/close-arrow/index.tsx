import { Button } from "@components/ui/button";
import { useSidebarMenuContext } from "@hooks/use-sidebar-menu-context";
import { cn } from "@lib/utils.ts";
import type React from "react";
import { IoIosArrowBack } from "react-icons/io";

const CloseArrow: React.FC = () => {
	const { setSidebarIsOpen, sidebarIsOpen } = useSidebarMenuContext();
	const toggleMenu = () => {
		setSidebarIsOpen((open) => !open);
	};
	return (
		<Button
			variant={"none"}
			size={"icon"}
			onClick={toggleMenu}
			className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
		>
			<IoIosArrowBack
				size={25}
				className={cn("transition-[transform]", sidebarIsOpen && "rotate-180")}
			/>
		</Button>
	);
};

export { CloseArrow };
