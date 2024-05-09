import { ThemeContext } from "@context-providers/theme";
import type { ThemeContextValues } from "@context-providers/theme/types.ts";
import { useContext } from "react";

const useTheme = (): ThemeContextValues => {
	const context = useContext(ThemeContext);

	if (context === null) {
		throw new Error("useTheme must be used within a ThemeContextProvider");
	}

	return context;
};

export { useTheme };
