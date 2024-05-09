import type { resources } from "@/locales";
import "i18next";

declare module "i18next" {
	interface CustomTypeOptions {
		resources: (typeof resources)["en"];
	}
}
