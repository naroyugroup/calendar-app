import { deleteRemoveParticipant } from "@api/calendars/delete-participant";
import type { RemoveParticipantParams } from "@api/calendars/delete-participant/types.ts";
import { getAllCalendarsGroup } from "@api/calendars/get-all-calendars";
import type { Participant } from "@api/calendars/get-all-calendars/types.ts";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { useAuth } from "@hooks/use-auth";
import { useCalendar } from "@hooks/use-calendar";
import { SelectRoleColumn } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members/components/manage-users/components/select-role-column";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { MdDeleteForever } from "react-icons/md";

export const columns: ColumnDef<Participant>[] = [
	{
		accessorKey: "email",
		header: () => {
			const { t } = useTranslation("appCalendars");
			return (
				<div>{t("content.card.modal.members.manage.table.user.title")}</div>
			);
		},
		cell: ({ row }) => {
			const { picture, name, email } = row.original;
			return (
				<div
					className={"flex flex-row gap-x-3 items-center w-full max-w-[70%]"}
				>
					<Avatar>
						<AvatarImage src={picture || undefined} />
						<AvatarFallback>{name[0]}</AvatarFallback>
					</Avatar>
					<div>
						<p className={"text-start"}>{name}</p>
						<p className={"text-xs"}>{email}</p>
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: "role",
		header: () => {
			const { t } = useTranslation("appCalendars");
			return (
				<div>{t("content.card.modal.members.manage.table.role.title")}</div>
			);
		},
		cell: ({ row }) => <SelectRoleColumn row={row} />,
	},
	{
		accessorKey: "id",
		header: "",
		cell: ({ row }) => {
			const { calendar } = useCalendar();
			const { currentUser } = useAuth();
			const queryClient = useQueryClient();
			const { mutate, isPending } = useMutation({
				mutationFn: ({ calendarId, requestData }: RemoveParticipantParams) =>
					deleteRemoveParticipant({ calendarId, requestData }),
				onSuccess: () => {
					return queryClient.invalidateQueries({
						queryKey: getAllCalendarsGroup().queryKey,
					});
				},
			});

			return (
				<Button
					disabled={
						calendar.ownerId !== currentUser?.id ||
						row.original.role === "owner" ||
						isPending
					}
					className={"size-10 p-0"}
					variant={"ghost"}
					onClick={() => {
						mutate({
							calendarId: `${calendar.id}`,
							requestData: {
								email: row.original.email,
							},
						});
					}}
				>
					<MdDeleteForever size={22} />
				</Button>
			);
		},
	},
];
