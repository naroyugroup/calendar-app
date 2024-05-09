import { deleteEvent } from "@api/calendar-events/delete-event";
import type { DeleteEventParams } from "@api/calendar-events/delete-event/types.ts";
import { Button } from "@components/ui/button";
import { useFullPageCalendar } from "@hooks/use-full-page-calendar";
import type { DeleteEventButtonProps } from "@pages/app/calendarId/index/components/full-page-calendar/components/modal-content/components/delete-event-button/types.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { useTranslation } from "react-i18next";

const DeleteEventButton: React.FC<DeleteEventButtonProps> = ({
	disabled,
	disableForm,
}) => {
	const { t } = useTranslation("appCalendarId");
	const { selectedEvent, setSelectedEvent, setDialogOpen } =
		useFullPageCalendar();

	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: ({ calendarId, eventId }: DeleteEventParams) => {
			return deleteEvent({ calendarId, eventId });
		},
		onSuccess: () => {
			setSelectedEvent(null);
			setDialogOpen(false);
			return queryClient.invalidateQueries({
				queryKey: ["events-by-range"],
			});
		},
		onSettled: () => {
			disableForm(false);
		},
	});

	return (
		<Button
			disabled={disabled}
			type={"button"}
			variant={"destructive"}
			onClick={() => {
				if (!selectedEvent) return;
				disableForm(true);
				mutate({
					calendarId: `${selectedEvent.calendarId}`,
					eventId: selectedEvent.period.eventId,
				});
			}}
		>
			{t("eventModal.modify.deleteButton")}
		</Button>
	);
};

export { DeleteEventButton };
