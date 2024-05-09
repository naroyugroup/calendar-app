import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { useAuth } from "@hooks/use-auth";
import { useCalendar } from "@hooks/use-calendar";
import { InviteUsers } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members/components/invite-users";
import { ManageUsers } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members/components/manage-users";
import type React from "react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSettings } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";

const CalendarMembers: React.FC = () => {
	const { t } = useTranslation("appCalendars");
	const [membersState, setMembersState] = useState<"Invite" | "Manage">(
		"Manage",
	);

	const { calendar } = useCalendar();
	const { currentUser } = useAuth();

	const participant = useMemo(() => {
		return calendar.participants.find((item) => item.id === currentUser?.id);
	}, [calendar.participants, currentUser?.id]);

	return (
		<>
			<div>
				<div className={"flex flex-row gap-x-2 justify-end"}>
					<Button
						size={"sm"}
						variant={membersState === "Manage" ? "secondary" : "accentGhost"}
						onClick={() => setMembersState("Manage")}
						className={"gap-x-1.5 min-w-24"}
					>
						<CiSettings size={20} />
						{t("content.card.modal.members.manage.title")}
					</Button>
					<Button
						disabled={
							participant?.role !== "admin" && participant?.role !== "owner"
						}
						size={"sm"}
						variant={membersState === "Invite" ? "secondary" : "accentGhost"}
						onClick={() => setMembersState("Invite")}
						className={"gap-x-1.5 min-w-24"}
					>
						<MdPeopleAlt size={20} />
						{t("content.card.modal.members.invite.title")}
					</Button>
				</div>
				<Separator className={"mt-0.5"} />
			</div>

			{membersState === "Manage" && <ManageUsers />}

			{membersState === "Invite" && <InviteUsers />}
		</>
	);
};

export { CalendarMembers };
