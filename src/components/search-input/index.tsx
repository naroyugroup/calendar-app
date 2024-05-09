import { Input } from "@/components/ui/input";
import type { SearchInputProps } from "@components/search-input/types.ts";
import { Label } from "@components/ui/label";
import { cn } from "@lib/utils.ts";
import { Search, X } from "lucide-react";
import type React from "react";
import type { ChangeEvent } from "react";
import { useId } from "react";

const SearchInput: React.FC<SearchInputProps> = ({
	setSearchValue,
	searchValue,
	className,
	containerClassName,
	placeholder,
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const clearSearchQuery = () => {
		setSearchValue("");
	};

	const inputId = useId();

	return (
		<div className={cn("w-full relative min-w-32", containerClassName)}>
			<Label htmlFor={inputId}>
				<Search
					className={
						"absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
					}
				/>
			</Label>
			<Input
				id={inputId}
				className={cn("w-full pl-9 pr-9", className)}
				placeholder={placeholder}
				onChange={handleChange}
				value={searchValue}
			/>
			{searchValue.length !== 0 && (
				<button
					type={"button"}
					className={
						"flex items-center justify-center opacity-60 hover:opacity-100 transition absolute top-1/2 transform -translate-y-1/2 right-3 text-muted-foreground h-4 w-4"
					}
					onClick={clearSearchQuery}
				>
					<X />
				</button>
			)}
		</div>
	);
};
export { SearchInput };
