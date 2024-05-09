import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@components/ui/dialog";
import { CreateForm } from "@pages/app/calendars/index/components/create-new-calendar-button/components/create-form";
import { HintButton } from "@pages/app/calendars/index/components/create-new-calendar-button/components/hint-button";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CreateNewCalendarButton: React.FC = () => {
	const { t } = useTranslation("appCalendars");
	const [contentOpen, setContentOpen] = useState(false);

	return (
		<Dialog open={contentOpen} onOpenChange={setContentOpen}>
			<DialogTrigger asChild>
				<HintButton label={t("content.createNewCalendar.modalTriggerHint")} />
			</DialogTrigger>
			<DialogContent
				className={
					"xs:max-h-[30rem] xs:h-[18rem] xs:max-w-[32rem] flex flex-col"
				}
			>
				<DialogHeader>
					<DialogTitle>
						{t("content.createNewCalendar.modal.title")}
					</DialogTitle>
				</DialogHeader>

				<CreateForm contentOpen={contentOpen} setContentOpen={setContentOpen} />
			</DialogContent>
		</Dialog>
	);
};

export { CreateNewCalendarButton };
