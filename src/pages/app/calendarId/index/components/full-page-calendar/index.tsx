import { Dialog } from "@components/ui/dialog";
import { useFullPageCalendar } from "@hooks/use-full-page-calendar";
import { CalendarSidebar } from "@pages/app/calendarId/index/components/full-page-calendar/components/calendar-sidebar";
import { CalendarHeader } from "@pages/app/calendarId/index/components/full-page-calendar/components/header";
import { ModalContent } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content";
import { Month } from "@pages/app/calendarId/index/components/full-page-calendar/components/month";
import type React from "react";
import { useState } from "react";

const FullPageCalendar: React.FC = () => {
	const { currentMonth, dialogOpen, setDialogOpen } = useFullPageCalendar();
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
			<div className={"h-screen flex flex-col"}>
				<CalendarHeader setSidebarOpen={setSidebarOpen} />
				<div className="flex flex-1">
					<CalendarSidebar sidebarOpen={sidebarOpen} />
					<Month month={currentMonth} />
				</div>
			</div>
			<ModalContent />
		</Dialog>
	);
};

export { FullPageCalendar };
