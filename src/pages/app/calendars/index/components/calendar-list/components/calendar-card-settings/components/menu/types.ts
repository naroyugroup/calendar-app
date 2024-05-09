import type { CalendarModal } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/enums.ts";
import type React from "react";

export interface MenuProps {
	setSettingsState: React.Dispatch<React.SetStateAction<CalendarModal>>;
	settingsState: CalendarModal;
}
