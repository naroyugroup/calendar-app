import { postLogout } from "@api/auth/logout";
import { AccountDialogContent } from "@components/account/components/account-dialog-content";
import { AvatarMenuContent } from "@components/account/components/avatar-menu-content";
import { AvatarTrigger } from "@components/account/components/avatar-trigger";
import { Popover } from "@components/ui/popover";
import { useAuth } from "@hooks/use-auth";
import { Dialog } from "@radix-ui/react-dialog";
import { calendarsRoute } from "@router/routes.tsx";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import type React from "react";
import { useCallback, useLayoutEffect, useState } from "react";

const Account: React.FC = () => {
	const [open, setOpen] = useState(false);

	const { currentUser, logout } = useAuth();
	const navigate = calendarsRoute.useNavigate();
	const router = useRouter();

	const { mutate, isSuccess } = useMutation({
		mutationFn: () => postLogout(),
	});

	const handleSignOut = useCallback(() => {
		setOpen(false);
		mutate();
	}, [mutate]);

	const handleSettings = useCallback(() => {
		setOpen(false);
	}, []);

	useLayoutEffect(() => {
		if (isSuccess) {
			logout();
			router.invalidate().finally(() => {
				navigate({ to: "/login" });
			});
		}
	}, [isSuccess, logout, navigate, router.invalidate]);

	if (currentUser === null) return null;

	return (
		<Dialog>
			<Popover open={open} onOpenChange={setOpen}>
				<AvatarTrigger
					image={currentUser.picture || undefined}
					fallbackLabel={currentUser.name[0]}
				/>
				<AvatarMenuContent
					settingsOnClick={handleSettings}
					signOutOnClick={handleSignOut}
				/>
			</Popover>
			<AccountDialogContent />
		</Dialog>
	);
};

export { Account };
