import type React from "react";

export interface SearchInputProps {
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	searchValue: string;
	className?: string;
	containerClassName?: string;
	placeholder: string;
}
