import { useSidebarMenuContext } from "@hooks/use-sidebar-menu-context";
import type React from "react";
import { MdMenu } from "react-icons/md";

const MediumScreenMenuButton: React.FC = () => {
	const { setSidebarIsOpen } = useSidebarMenuContext();

	const openMenu = () => {
		setSidebarIsOpen(true);
	};

	return (
		<div className="m-3 md:hidden" onClick={openMenu}>
			<MdMenu size={25} />
		</div>
	);
};

export { MediumScreenMenuButton };
