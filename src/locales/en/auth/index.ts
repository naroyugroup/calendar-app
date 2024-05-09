const auth = {
	login: {
		title: "Log In",
		description: "Log in and start handling your calendars.",
		form: {
			email: {
				label: "Email",
				placeholder: "Your email",
			},
			password: {
				label: "Password",
				placeholder: "Your password",
			},
			submitButton: "Log In",
		},
		noAccount: {
			label: "No account?",
			link: "Sign Up",
		},
		separator: "or",
	},
	registration: {
		title: "Register",
		description: "Register to create your first calendar.",
		form: {
			email: {
				label: "Email",
				placeholder: "Your email",
			},
			name: {
				label: "Name",
				placeholder: "Your name",
			},
			password: {
				label: "Password",
				placeholder: "Your password",
			},
			confirmPassword: {
				label: "Confirm password",
				placeholder: "Confirm your password",
			},
			submitButton: "Register",
		},
		haveAccount: {
			label: "Have an account?",
			link: "Sign In",
		},
		separator: "or",
	},
} as const;

export { auth };
