import type React from "react";

export type Theme = "light" | "dark";

export interface ThemeContextProviderProps {
	children: React.ReactNode;
}

export interface ThemeContextValues {
	theme: Theme;
	toggleTheme: () => void;
}
