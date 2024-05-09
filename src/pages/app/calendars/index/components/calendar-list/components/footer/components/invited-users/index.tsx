import { MAX_OTHERS_SHOWN_USERS } from "@/consts.ts";
import { useCalendar } from "@hooks/use-calendar";
import { UserAvatar } from "@pages/app/calendars/index/components/calendar-list/components/footer/components/invited-users/components/user-avatar";
import type React from "react";
import { useTranslation } from "react-i18next";

const InvitedUsers: React.FC = () => {
	const { calendar } = useCalendar();
	const ME = 1;
	const hasMoreUsers =
		calendar.participants.length - ME > MAX_OTHERS_SHOWN_USERS;
	const { t } = useTranslation("appCalendars");
	return (
		<div className={"flex -space-x-1.5 z-20 select-none"}>
			{calendar.participants
				.slice(0, MAX_OTHERS_SHOWN_USERS)
				.map(({ id, picture, name }) => {
					if (calendar.ownerId === id) return;
					return (
						<UserAvatar
							key={id}
							src={picture || undefined}
							name={name}
							fallback={name[0]}
						/>
					);
				})}
			{hasMoreUsers && (
				<UserAvatar
					name={t("content.card.avatarMoreMembers", {
						number: calendar.participants.length - ME - MAX_OTHERS_SHOWN_USERS,
					})}
					fallback={`+${
						calendar.participants.length - ME - MAX_OTHERS_SHOWN_USERS
					}`}
				/>
			)}
		</div>
	);
};

export { InvitedUsers };
