import { CalendarDays } from "lucide-react";
import type React from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
	const { t } = useTranslation("appCalendars");

	return (
		<div className="flex items-center gap-2.5 font-medium py-3 mx-3">
			<CalendarDays size={42} className={"min-w-max"} />
			<span className="text-xl whitespace-pre">{t("sidebar.title")}</span>
		</div>
	);
};

export { Header };
