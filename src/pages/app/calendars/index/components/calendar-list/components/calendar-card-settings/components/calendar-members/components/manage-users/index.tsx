import type { Participant } from "@api/calendars/get-all-calendars/types.ts";
import { Button } from "@components/ui/button";
import { useCalendar } from "@hooks/use-calendar";
import { UsersTable } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members/components/manage-users/components/users-table";
import {
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import type * as React from "react";
import { useTranslation } from "react-i18next";
import { columns } from "./columns.tsx";

const ManageUsers: React.FC = () => {
	const { calendar } = useCalendar();
	const { t } = useTranslation("appCalendars");
	const table = useReactTable<Participant>({
		data: calendar.participants,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 5,
			},
		},
	});

	return (
		<>
			<UsersTable table={table} />

			<div className="space-x-2 flex items-center justify-end">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					{t("content.card.modal.members.manage.pagination.prev")}
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					{t("content.card.modal.members.manage.pagination.next")}
				</Button>
			</div>
		</>
	);
};

export { ManageUsers };
