import { MEDIUM_SCREEN_PX } from "@/consts.ts";
import { FALLBACK_LANG, supportedLanguage } from "@/locales";
import { Drawer, DrawerContent, DrawerTrigger } from "@components/ui/drawer";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/ui/popover";
import { useDeviceParams } from "@hooks/use-device-params";
import type { SupportedLanguage } from "@locales/types.ts";
import { LanguageList } from "@pages/app/calendars/components/sidebar/components/menu-content/components/section/components/language-picker/components/language-list";
import { SectionButton } from "@pages/app/calendars/components/sidebar/components/menu-content/components/section/components/section-button";
import { MENU_ICON_SIZE } from "@pages/app/calendars/components/sidebar/consts.ts";
import { Languages } from "lucide-react";
import * as React from "react";
import { useTranslation } from "react-i18next";

const ComboBoxResponsive: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const { width } = useDeviceParams();
	const { i18n } = useTranslation();

	const initialLanguage = () => {
		return (
			supportedLanguage.find((lang) => lang.code === i18n.language) ||
			FALLBACK_LANG
		);
	};

	const [selectedLanguage, setSelectedStatus] =
		React.useState<SupportedLanguage>(initialLanguage);

	if (width < MEDIUM_SCREEN_PX) {
		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild>
					<SectionButton label={selectedLanguage.languageLabel}>
						<Languages className={"min-w-max"} size={MENU_ICON_SIZE} />
					</SectionButton>
				</DrawerTrigger>
				<DrawerContent>
					<div className="mt-4 border-t">
						<LanguageList
							setOpen={setOpen}
							setSelectedStatus={setSelectedStatus}
						/>
					</div>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<SectionButton label={selectedLanguage.languageLabel}>
					<Languages className={"min-w-max"} size={MENU_ICON_SIZE} />
				</SectionButton>
			</PopoverTrigger>
			<PopoverContent className="w-[15rem] p-0" align="start">
				<LanguageList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
			</PopoverContent>
		</Popover>
	);
};

export { ComboBoxResponsive };
