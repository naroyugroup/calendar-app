import type { SupportedLanguage } from "@locales/types.ts";
import type * as React from "react";

export interface LanguageListProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setSelectedStatus: React.Dispatch<React.SetStateAction<SupportedLanguage>>;
}
