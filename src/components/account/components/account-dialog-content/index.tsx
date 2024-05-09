import { DangerSection } from "@components/account/components/account-dialog-content/components/danger-section";
import { DialogAccordion } from "@components/account/components/account-dialog-content/components/dialog-accordion";
import { Container } from "@components/account/components/account-dialog-content/components/dialog-accordion/components/container";
import { PasswordSection } from "@components/account/components/account-dialog-content/components/password-section";
import { ProfileSection } from "@components/account/components/account-dialog-content/components/profile-section";
import { DialogActionButton } from "@components/dialog-action-button";
import { DialogSection } from "@components/dialog-section";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@components/ui/dialog";
import { useAuth } from "@hooks/use-auth";
import type React from "react";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const AccountDialogContent: React.FC = () => {
	const { t } = useTranslation("appCalendars");
	const { currentUser } = useAuth();

	// ! TODO: add content state with page to change image/password/name etc. something like contentState / routing
	// interface DialogContentState {
	// 	type: "Account" | "Image" | "Password" | "Name" | "Connect Google";
	// 	title: string;
	// }
	// const [contentState, setContentState] = useState<DialogContentState>({
	// 	type: "Account",
	// 	title: t("content.account.modal.header.title"),
	// });

	// <Input
	// 	type={"file"}
	// 	placeholder={"test"}
	// 	accept="image/png, image/jpeg, image/webp"
	// />

	if (currentUser === null) return null;
	return (
		<DialogContent className={"flex flex-col"}>
			<DialogHeader>
				<DialogTitle>{t("content.account.modal.header.title")}</DialogTitle>
				<DialogDescription>
					{t("content.account.modal.header.description")}
				</DialogDescription>
			</DialogHeader>

			<DialogSection title={t("content.account.modal.profile.title")}>
				<DialogAccordion
					icon={MdEmail}
					title={t("content.account.modal.profile.email.title")}
				>
					<Container>
						{t("content.account.modal.profile.email.label")}&nbsp;
						<span className={"font-semibold"}>{currentUser.email}</span>
					</Container>
				</DialogAccordion>

				<ProfileSection />

				<PasswordSection />

				<DialogAccordion
					icon={FcGoogle}
					title={t("content.account.modal.profile.google.title")}
				>
					{currentUser.googleId ? (
						<Container>
							<div
								className={"flex flex-row gap-x-4 items-center overflow-x-auto"}
							>
								<Avatar className={"size-7"}>
									<AvatarImage src={currentUser.picture || undefined} />
									<AvatarFallback
										className={
											"bg-primary/90 text-primary-foreground font-semibold"
										}
									>
										{currentUser.name[0]}
									</AvatarFallback>
								</Avatar>

								<span className={"font-semibold"}>{currentUser.email}</span>
							</div>
						</Container>
					) : (
						<DialogActionButton
							disabled
							title={t(
								"content.account.modal.profile.google.connectAccountButton",
							)}
						/>
					)}
				</DialogAccordion>
			</DialogSection>

			<DangerSection />
		</DialogContent>
	);
};

export { AccountDialogContent };
