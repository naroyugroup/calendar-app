import { getAllCalendarsGroup } from "@api/calendars/get-all-calendars";
import { deleteRemoveCalendar } from "@api/calendars/remove-calendar";
import type { DeleteRemoveCalendarParams } from "@api/calendars/remove-calendar/types.ts";
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
import { useAuth } from "@hooks/use-auth";
import { useCalendar } from "@hooks/use-calendar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const CalendarDanger: React.FC = () => {
	const { t } = useTranslation("appCalendars");
	const { currentUser } = useAuth();
	const { calendar } = useCalendar();
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationFn: ({ calendarId }: DeleteRemoveCalendarParams) => {
			return deleteRemoveCalendar({ calendarId });
		},
		onSuccess: () => {
			const queryData = queryClient.getQueryData(
				getAllCalendarsGroup().queryKey,
			);

			if (!queryData) return;

			const freshData = queryData.filter((item) => item.id !== calendar.id);

			return queryClient.setQueryData(
				getAllCalendarsGroup().queryKey,
				freshData,
			);
		},
	});

	const participant = useMemo(() => {
		return calendar.participants.find((item) => item.id === currentUser?.id);
	}, [calendar.participants, currentUser?.id]);

	return (
		<DialogSection title={t("content.card.modal.settings.danger.title")}>
			<div className={"flex flex-row items-center gap-x-2 mt-2 mx-3"}>
				<div className={"flex flex-col flex-1"}>
					<p className={"text-sm"}>
						{t("content.card.modal.settings.danger.subheader")}
					</p>
					<p className={"text-muted-foreground text-xs"}>
						{t("content.card.modal.settings.danger.description")}
					</p>
				</div>

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button
							disabled={participant?.role !== "owner"}
							variant={"destructive"}
							size={"sm"}
							className={"text-xs"}
						>
							{t("content.card.modal.settings.danger.buttonTitle")}
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								{t("content.card.modal.settings.danger.deleteAlert.title")}
							</AlertDialogTitle>
							<AlertDialogDescription>
								{t(
									"content.card.modal.settings.danger.deleteAlert.description",
								)}
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>
								{t("content.card.modal.settings.danger.deleteAlert.cancel")}
							</AlertDialogCancel>
							<AlertDialogAction
								disabled={isPending}
								onClick={() => {
									mutate({
										calendarId: `${calendar.id}`,
									});
								}}
							>
								{t("content.card.modal.settings.danger.deleteAlert.continue")}
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</DialogSection>
	);
};

export { CalendarDanger };
