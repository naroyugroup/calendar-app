import { Checkbox } from "@components/ui/checkbox";
import type { AllDayCheckboxProps } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/all-day-checkbox/types.ts";
import type React from "react";
import { useId } from "react";
import { useTranslation } from "react-i18next";

const AllDayCheckbox: React.FC<AllDayCheckboxProps> = ({
	setIsAllDayEvent,
	isAllDayEvent,
	disabled,
}) => {
	const checkboxId = useId();
	const { t } = useTranslation("appCalendarId");
	return (
		<div className="flex items-center space-x-2">
			<Checkbox
				disabled={disabled}
				onCheckedChange={setIsAllDayEvent}
				checked={isAllDayEvent}
				id={checkboxId}
				className={"size-4"}
			/>
			<label
				htmlFor={checkboxId}
				className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{t("eventModal.form.allDay")}
			</label>
		</div>
	);
};

export { AllDayCheckbox };
