import type { Participant } from "@api/calendars/get-all-calendars/types.ts";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/ui/table";
import { flexRender } from "@tanstack/react-table";
import type { useReactTable } from "@tanstack/react-table";
import type React from "react";
import { useTranslation } from "react-i18next";
import { columns } from "../../columns.tsx";

export interface UsersTableProps {
	table: ReturnType<typeof useReactTable<Participant>>;
}

const UsersTable: React.FC<UsersTableProps> = ({ table }) => {
	const { t } = useTranslation("appCalendars");

	return (
		<div className="rounded-md border overflow-y-auto">
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => {
									return (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									);
								})}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								{t("content.card.modal.members.manage.noCells")}
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export { UsersTable };
