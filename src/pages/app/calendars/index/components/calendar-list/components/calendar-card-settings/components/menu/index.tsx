import { Button } from "@components/ui/button";
import type { MenuProps } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/menu/types.ts";
import { CalendarModal } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/enums.ts";
import type React from "react";
import { useTranslation } from "react-i18next";
import { CiSettings } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";

const Menu: React.FC<MenuProps> = ({ setSettingsState, settingsState }) => {
	const { t } = useTranslation("appCalendars");
	return (
		<div className={"flex flex-row gap-x-2"}>
			<Button
				size={"sm"}
				variant={
					settingsState === CalendarModal.Settings ? "secondary" : "accentGhost"
				}
				onClick={() => setSettingsState(CalendarModal.Settings)}
				className={"gap-x-1.5"}
			>
				<CiSettings size={20} />
				{t("content.card.modal.settings.title")}
			</Button>
			<Button
				size={"sm"}
				variant={
					settingsState === CalendarModal.Members ? "secondary" : "accentGhost"
				}
				onClick={() => setSettingsState(CalendarModal.Members)}
				className={"gap-x-1.5"}
			>
				<MdPeopleAlt size={20} />
				{t("content.card.modal.members.title")}
			</Button>
		</div>
	);
};

export { Menu };
