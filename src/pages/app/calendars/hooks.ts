import { MenuFilter } from "@/enums";
import type { CalendarsMenuFilter } from "@pages/app/calendars/types.ts";
import { useTranslation } from "react-i18next";
import { AiOutlineAppstore } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { SiGooglecalendar } from "react-icons/si";

const useCalendarsMenuFilterList = () => {
	const { t } = useTranslation("appCalendars");

	const calendarsMenuFilterList: CalendarsMenuFilter[] = [
		{
			buttonData: {
				label: t("sidebar.filters.all"),
				icon: AiOutlineAppstore,
			},
			headerData: {
				title: t("sidebar.filters.all"),
			},
			searchParams: {
				filter: MenuFilter.All,
			},
		},
		{
			buttonData: {
				label: t("sidebar.filters.favorites"),
				icon: CiStar,
			},
			headerData: {
				title: t("sidebar.filters.favorites"),
			},
			searchParams: {
				filter: MenuFilter.Favorites,
			},
		},
		{
			buttonData: {
				label: "Google",
				icon: SiGooglecalendar,
			},
			headerData: {
				title: "Google",
			},
			searchParams: {
				filter: MenuFilter.Google,
			},
		},
	];

	return { calendarsMenuFilterList };
};

export { useCalendarsMenuFilterList };
