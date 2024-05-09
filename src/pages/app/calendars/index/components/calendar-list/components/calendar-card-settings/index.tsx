import { Button } from "@components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@components/ui/dialog";
import { Separator } from "@components/ui/separator";
import { CalendarMembers } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members";
import { CalendarSettings } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-settings";
import { Menu } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/menu";
import { CalendarModal } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/enums.ts";
import { MoreHorizontal } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CalendarCardSettings: React.FC = () => {
	const { t } = useTranslation("appCalendars");
	const [open, setOpen] = useState(false);
	const [settingsState, setSettingsState] = useState<CalendarModal>(
		CalendarModal.Settings,
	);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					variant={"none"}
					type={"button"}
					className={
						"absolute top-1 right-1 md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none z-20 focus-visible:opacity-100"
					}
				>
					<MoreHorizontal
						className={
							"text-white opacity-75 hover:opacity-100 transition-opacity"
						}
					/>
				</Button>
			</DialogTrigger>
			<DialogContent className={"flex flex-col"}>
				<DialogHeader>
					<DialogTitle>{t("content.card.modal.title")}</DialogTitle>
					<DialogDescription>
						{t("content.card.modal.description")}
					</DialogDescription>
				</DialogHeader>

				<div>
					<Menu
						settingsState={settingsState}
						setSettingsState={setSettingsState}
					/>
					<Separator className={"mt-0.5"} />
				</div>

				{settingsState === CalendarModal.Settings && (
					<CalendarSettings contentOpen={open} />
				)}
				{settingsState === CalendarModal.Members && <CalendarMembers />}
			</DialogContent>
		</Dialog>
	);
};

export { CalendarCardSettings };
