const calendarId = {
	navbar: {
		todayButton: "Today",
	},
	eventModal: {
		create: {
			title: "Create event",
			description: "Here you can create new event",
			submit: "Create",
		},
		modify: {
			title: "Modify event",
			description: "Here you can modify your event",
			deleteButton: "Delete event",
			submit: "Modify",
		},
		form: {
			summary: {
				title: "Event title",
				placeholder: "Your event placeholder",
			},
			allDay: "All day",
			date: {
				pickDate: {
					title: "Pick date",
				},
				startDate: {
					title: "Start date",
				},
				endDate: {
					title: "End date",
				},
			},
			details: {
				title: "Event details",
				description: {
					title: "Event description",
					placeholder: "Your event description",
				},
				location: {
					title: "Event location",
					placeholder: "Your event location",
				},
				attendees: {
					title: "Invite attendees",
					placeholder: "Email invite",
				},
			},
		},
	},
} as const;

export { calendarId };
