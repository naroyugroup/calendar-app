import type React from "react";

export interface AttendeeListProps {
	attendees: string[];
	setAttendees: React.Dispatch<React.SetStateAction<string[]>>;
	onAttendeesSet: (data: string[]) => void;
	disabled: boolean;
}
