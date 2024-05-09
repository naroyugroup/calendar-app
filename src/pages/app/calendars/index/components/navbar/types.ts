import type React from "react";

export interface NavbarProps {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
