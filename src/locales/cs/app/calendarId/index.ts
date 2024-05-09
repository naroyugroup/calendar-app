const calendarId = {
	navbar: {
		todayButton: "Dnes",
	},
	eventModal: {
		create: {
			title: "Vytvořit událost",
			description: "Zde můžete vytvořit novou událost",
			submit: "Vytvořit",
		},
		modify: {
			title: "Upravit událost",
			description: "Zde můžete upravit svou událost",
			deleteButton: "Smazat událost",
			submit: "Upravit",
		},
		form: {
			summary: {
				title: "Název události",
				placeholder: "Název vaší události",
			},
			allDay: "Celý den",
			date: {
				pickDate: {
					title: "Vybrat datum",
				},
				startDate: {
					title: "Počáteční datum",
				},
				endDate: {
					title: "Koncové datum",
				},
			},
			details: {
				title: "Podrobnosti události",
				description: {
					title: "Popis události",
					placeholder: "Popis vaší události",
				},
				location: {
					title: "Místo události",
					placeholder: "Místo vaší události",
				},
				attendees: {
					title: "Pozvat účastníky",
					placeholder: "E-mail k pozvánce",
				},
			},
		},
	},
} as const;

export { calendarId };
