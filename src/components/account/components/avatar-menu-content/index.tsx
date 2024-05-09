import type { AvatarMenuContentProps } from "@components/account/components/avatar-menu-content/types.ts";
import { Button } from "@components/ui/button";
import { DialogTrigger } from "@components/ui/dialog";
import { PopoverContent } from "@components/ui/popover";
import { LogOut, Settings } from "lucide-react";
import type React from "react";
import { useTranslation } from "react-i18next";

const AvatarMenuContent: React.FC<AvatarMenuContentProps> = ({
	settingsOnClick,
	signOutOnClick,
}) => {
	const { t } = useTranslation("appCalendars");

	return (
		<PopoverContent
			align={"end"}
			sideOffset={10}
			side={"bottom"}
			className={"max-w-56 rounded-xl"}
		>
			<DialogTrigger asChild>
				<Button
					variant={"accentGhost"}
					className={"w-full justify-start gap-x-7 text-muted-foreground"}
					onClick={settingsOnClick}
				>
					<Settings size={20} />
					{t("content.account.settings")}
				</Button>
			</DialogTrigger>

			<Button
				variant={"accentGhost"}
				className={"w-full justify-start gap-x-7 text-muted-foreground"}
				onClick={signOutOnClick}
			>
				<LogOut size={20} />
				{t("content.account.signOut")}
			</Button>
		</PopoverContent>
	);
};

export { AvatarMenuContent };
