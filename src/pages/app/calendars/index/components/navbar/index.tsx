import { Account } from "@components/account";
import { SearchInput } from "@components/search-input";
import type { NavbarProps } from "@pages/app/calendars/index/components/navbar/types.ts";
import type React from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC<NavbarProps> = ({ setSearchValue, searchValue }) => {
	const { t } = useTranslation("appCalendars");

	return (
		<div
			className={
				"flex flex-row justify-between md:gap-x-10 gap-x-10 md:h-12 ml-9 md:ml-0 items-center md:static"
			}
		>
			<SearchInput
				placeholder={t("content.search.placeholder")}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				containerClassName={"max-w-md"}
				className={
					"focus-visible:ring-zinc-300 focus-visible:ring-offset-0 md:h-11 h-9"
				}
			/>

			<Account />
		</div>
	);
};

export { Navbar };
