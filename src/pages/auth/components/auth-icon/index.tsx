import { Button } from "@components/ui/button";
import type { AuthIconProps } from "@pages/auth/components/auth-icon/types.ts";
import type React from "react";

const AuthIcon: React.FC<AuthIconProps> = ({ icon: Icon }) => {
	return (
		<Button className={"rounded-full p-2.5"}>
			<Icon className={"size-full"} />
		</Button>
	);
};

export { AuthIcon };
