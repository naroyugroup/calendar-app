import { SupportedLanguageCode, SupportedLanguageLabel } from "@/enums";
import { cs } from "@locales/cs";
import { en } from "@locales/en";
import type { SupportedLanguage } from "@locales/types.ts";

export const resources = {
	en,
	cs,
} as const;

export const supportedLanguageCodes: SupportedLanguageCode[] = [
	SupportedLanguageCode.Czech,
	SupportedLanguageCode.English,
];

export const supportedLanguage: SupportedLanguage[] = [
	{
		code: SupportedLanguageCode.Czech,
		languageLabel: SupportedLanguageLabel.Czech,
	},
	{
		code: SupportedLanguageCode.English,
		languageLabel: SupportedLanguageLabel.English,
	},
];

export const FALLBACK_LANG: SupportedLanguage = {
	code: SupportedLanguageCode.English,
	languageLabel: SupportedLanguageLabel.English,
};
