import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@components/ui/command";
import type * as React from "react";

import { FALLBACK_LANG, supportedLanguage } from "@/locales";
import type { LanguageListProps } from "@pages/app/calendars/components/sidebar/components/menu-content/components/section/components/language-picker/components/language-list/types.ts";
import { useTranslation } from "react-i18next";

const LanguageList: React.FC<LanguageListProps> = ({
	setOpen,
	setSelectedStatus,
}) => {
	const { i18n, t } = useTranslation("appCalendars");

	return (
		<Command>
			<CommandInput placeholder={t("sidebar.langPicker.placeholder")} />
			<CommandList>
				<CommandEmpty>{t("sidebar.langPicker.notFound")}</CommandEmpty>
				<CommandGroup>
					{supportedLanguage.map((language) => (
						<CommandItem
							key={language.code}
							value={language.code}
							onSelect={(code) => {
								setSelectedStatus(
									supportedLanguage.find((lang) => lang.code === code) ||
										FALLBACK_LANG,
								);
								i18n.changeLanguage(code);
								setOpen(false);
							}}
						>
							{language.languageLabel}
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</Command>
	);
};

export { LanguageList };
