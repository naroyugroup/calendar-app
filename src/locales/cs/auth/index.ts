const auth = {
	login: {
		title: "Přihlásit se",
		description: "Přihlaste se a začněte spravovat své kalendáře.",
		form: {
			email: {
				label: "Email",
				placeholder: "Váš email",
			},
			password: {
				label: "Heslo",
				placeholder: "Vaše heslo",
			},
			submitButton: "Přihlásit se",
		},
		noAccount: {
			label: "Nemáte účet?",
			link: "Registrovat se",
		},
		separator: "nebo",
	},
	registration: {
		title: "Registrovat",
		description: "Registrovat se pro vytvoření svého prvního kalendáře.",
		form: {
			email: {
				label: "Email",
				placeholder: "Váš email",
			},
			name: {
				label: "Jméno",
				placeholder: "Vaše jméno",
			},
			password: {
				label: "Heslo",
				placeholder: "Vaše heslo",
			},
			confirmPassword: {
				label: "Potvrdit heslo",
				placeholder: "Potvrďte své heslo",
			},
			submitButton: "Registrovat",
		},
		haveAccount: {
			label: "Máte účet?",
			link: "Přihlásit se",
		},
		separator: "nebo",
	},
} as const;

export { auth };
