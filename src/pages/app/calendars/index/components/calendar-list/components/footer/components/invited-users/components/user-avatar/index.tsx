import { Hint } from "@components/hint";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import type React from "react";
import type { UserAvatarProps } from "./types.ts";

const UserAvatar: React.FC<UserAvatarProps> = ({ src, name, fallback }) => {
	return (
		<Hint label={name} side={"bottom"} align={"center"} sideOffset={9}>
			<Avatar
				className={
					"size-7 border-1 inline-block rounded-full ring-2 ring-accent"
				}
			>
				<AvatarImage src={src} />
				<AvatarFallback className={"text-xs bg-zinc-500 text-white"}>
					{fallback}
				</AvatarFallback>
			</Avatar>
		</Hint>
	);
};

export { UserAvatar };
