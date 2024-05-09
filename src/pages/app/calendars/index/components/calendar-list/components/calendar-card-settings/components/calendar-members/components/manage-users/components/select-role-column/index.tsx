import { roles } from "@/consts.ts";
import { getAllCalendarsGroup } from "@api/calendars/get-all-calendars";
import type { Participant } from "@api/calendars/get-all-calendars/types.ts";
import { putParticipantRole } from "@api/calendars/put-participant-role";
import type { PutParticipantRoleParams } from "@api/calendars/put-participant-role/types.ts";
import type { RoleValue } from "@api/calendars/types.ts";
import { Button } from "@components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/ui/popover";
import { useAuth } from "@hooks/use-auth";
import { useCalendar } from "@hooks/use-calendar";
import { roleValueToLabel } from "@lib/utils.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Row } from "@tanstack/react-table";
import { ChevronsUpDown } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export interface SelectRoleColumnProps {
	row: Row<Participant>;
}

const SelectRoleColumn: React.FC<SelectRoleColumnProps> = ({ row }) => {
	const { t } = useTranslation("appCalendars");
	const [open, setOpen] = useState(false);
	const { currentUser } = useAuth();
	const { calendar } = useCalendar();
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationFn: ({ calendarId, requestData }: PutParticipantRoleParams) =>
			putParticipantRole({ calendarId, requestData }),
		onSuccess: () => {
			return queryClient.invalidateQueries({
				queryKey: getAllCalendarsGroup().queryKey,
			});
		},
	});

	const { email, role: currentRole } = row.original;
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					disabled={
						calendar.ownerId !== currentUser?.id ||
						currentRole === "owner" ||
						isPending
					}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-28 justify-between"
				>
					{roleValueToLabel(currentRole)}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-40 p-0">
				<Command>
					<CommandInput
						placeholder={t(
							"content.card.modal.members.manage.table.role.combobox.placeholder",
						)}
					/>
					<CommandList>
						<CommandEmpty>
							{t(
								"content.card.modal.members.manage.table.role.combobox.notFound",
							)}
						</CommandEmpty>
						<CommandGroup>
							{roles.map((role) => {
								if (role.value === "owner") return;

								return (
									<CommandItem
										key={role.value}
										value={role.value}
										onSelect={(selectedValue) => {
											if (selectedValue === currentRole) return;
											mutate({
												calendarId: `${calendar.id}`,
												requestData: {
													email,
													role: selectedValue as RoleValue,
												},
											});
											setOpen(false);
										}}
									>
										{role.label}
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export { SelectRoleColumn };
