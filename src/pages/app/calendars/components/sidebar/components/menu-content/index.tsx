import { useTheme } from "@hooks/use-theme";
import { Section } from "@pages/app/calendars/components/sidebar/components/menu-content/components/section";
import { ComboBoxResponsive } from "@pages/app/calendars/components/sidebar/components/menu-content/components/section/components/language-picker";
import { MENU_ICON_SIZE } from "@pages/app/calendars/components/sidebar/consts.ts";
import { useCalendarsMenuFilterList } from "@pages/app/calendars/hooks.ts";
import { calendarsRoute } from "@router/routes.tsx";
import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { SectionButton } from "./components/section/components/section-button";

const MenuContent: React.FC = () => {
	const { filter } = calendarsRoute.useSearch();
	const { toggleTheme, theme } = useTheme();
	const { t } = useTranslation("appCalendars");
	const { calendarsMenuFilterList } = useCalendarsMenuFilterList();

	return (
		<>
			<div className={"border-b border-zinc-300 mx-3 px-3"} />
			<Section>
				{calendarsMenuFilterList.map((button) => (
					<Link
						tabIndex={-1}
						key={button.buttonData.label}
						to={"/calendars"}
						search={(prev) => ({
							...prev,
							filter: button.searchParams.filter,
						})}
					>
						<SectionButton
							variant={
								filter === button.searchParams.filter
									? "secondary"
									: "accentGhost"
							}
							label={button.buttonData.label}
						>
							{React.createElement(button.buttonData.icon, {
								className: "min-w-max",
								size: MENU_ICON_SIZE,
							})}
						</SectionButton>
					</Link>
				))}
			</Section>

			<div className={"border-b border-zinc-300 mx-3 px-3"} />
			<Section>
				<SectionButton
					className={""}
					onClick={toggleTheme}
					label={
						theme === "dark"
							? t("sidebar.themeButton.dark")
							: t("sidebar.themeButton.light")
					}
				>
					{theme === "dark" ? (
						<Moon className={"min-w-max"} size={MENU_ICON_SIZE} />
					) : (
						<Sun className={"min-w-max"} size={MENU_ICON_SIZE} />
					)}
				</SectionButton>
				<ComboBoxResponsive />
			</Section>
		</>
	);
};

export { MenuContent };
