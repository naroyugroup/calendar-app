import { Button } from "@components/ui/button";
import type { MobileAddAttendeeButtonProps } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/mobile-add-attendee-button/types.ts";
import type React from "react";
import { FaChevronRight } from "react-icons/fa";

const MobileAddAttendeeButton: React.FC<MobileAddAttendeeButtonProps> = ({
	onClick,
}) => {
	return (
		<Button
			onClick={onClick}
			type={"button"}
			className={"absolute bottom-1.5 right-1  p-2 size-fit xs:hidden"}
			variant={"accentGhost"}
		>
			<FaChevronRight size={13} />
		</Button>
	);
};

export { MobileAddAttendeeButton };
