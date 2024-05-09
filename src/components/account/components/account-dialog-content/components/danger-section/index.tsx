import { DialogSection } from "@components/dialog-section";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";
import type React from "react";
import { useTranslation } from "react-i18next";

const DangerSection: React.FC = () => {
	const { t } = useTranslation("appCalendars");

	return (
		<DialogSection title={t("content.account.modal.danger.title")}>
			<div className={"flex flex-row items-center gap-x-2 mt-2 mx-3"}>
				<div className={"flex flex-col flex-1"}>
					<p className={"text-sm"}>
						{t("content.account.modal.danger.subheader")}
					</p>
					<p className={"text-muted-foreground text-xs"}>
						{t("content.account.modal.danger.description")}
					</p>
				</div>

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant={"destructive"} size={"sm"} className={"text-xs"}>
							{t("content.account.modal.danger.buttonTitle")}
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								{t("content.account.modal.danger.deleteAlert.title")}
							</AlertDialogTitle>
							<AlertDialogDescription>
								{t("content.account.modal.danger.deleteAlert.description")}
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>
								{t("content.account.modal.danger.deleteAlert.cancel")}
							</AlertDialogCancel>
							<AlertDialogAction>
								{t("content.account.modal.danger.deleteAlert.continue")}
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</DialogSection>
	);
};

export { DangerSection };
