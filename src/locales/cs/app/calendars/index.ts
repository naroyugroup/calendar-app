const calendars = {
	sidebar: {
		title: "Online kalendář",
		filters: {
			all: "Všechny kalendáře",
			favorites: "Oblíbené",
		},
		themeButton: {
			light: "Světlá",
			dark: "Tmavá",
		},
		langPicker: {
			placeholder: "Najít jazyk...",
			notFound: "Nenalezeny žádné jazyky.",
		},
	},
	content: {
		createNewCalendar: {
			modalTriggerHint: "Vytvořit nový kalendář",
			modal: {
				title: "Nový kalendář",
				form: {
					titleInput: {
						label: "Název",
						placeholder: "Název vašeho kalendáře",
					},
					submit: "ODESLAT",
				},
				toast: {
					title: "Úspěšně vytvořeno",
					label:
						"Nyní můžete pozvat lidi do vašeho kalendáře v nastavení kalendáře.",
				},
			},
		},
		card: {
			avatarMoreMembers: "ještě {{number}}",
			emptyStates: {
				all: {
					header: "Žádné kalendáře k dispozici",
					subheader:
						"Momentálně nejsou k dispozici žádné kalendáře k zobrazení.",
				},
				favorites: {
					header: "Seznam oblíbených je prázdný",
					subheader:
						"Začněte přidávat své oblíbené kalendáře do tohoto seznamu!",
				},
				google: {
					header: "Nenalezeny žádné kalendáře Google",
					subheader: "Zatím jste nesynchronizovali žádné kalendáře Google.",
				},
				error: {
					header: "Jejda! Něco se pokazilo",
					subheader:
						"Při načítání vašich kalendářů došlo k chybě. Prosím, zkuste to znovu později.",
				},
				search: {
					header: "Jejda! Nenalezeny žádné kalendáře",
					subheader: "Vašemu hledání neodpovídají žádné kalendáře.",
				},
			},
			modal: {
				title: "Nastavení",
				description: "Spravovat nastavení organizace",
				settings: {
					title: "Nastavení",
					edit: {
						title: "Upravit",
						form: {
							titleInput: {
								label: "Název",
								placeholder: "Název vašeho kalendáře",
							},
							submit: "AKTUALIZOVAT",
						},
						toast: {
							title: "Úspěšně změněno",
							label: "Vaše kalendářní data byla úspěšně změněna.",
						},
					},
					danger: {
						title: "Nebezpečí",
						subheader: "Smazat kalendář",
						description: "Smazat váš kalendář a všechna s ním spojená data",
						buttonTitle: "SMAZAT KALENDÁŘ",
						deleteAlert: {
							title: "Jste si naprosto jistí?",
							description:
								"Tato akce nemůže být vrácena. Tímto se váš kalendář trvale smaže a vaše data budou odstraněna z našich serverů.",
							cancel: "Zrušit",
							continue: "Smazat",
						},
					},
				},

				members: {
					title: "Členové",
					invite: {
						title: "Pozvat",
						inviteButton: "Pozvat",
						input: {
							label: "Emailový seznam",
							placeholder: "Pozvánka e-mailem",
						},
					},
					manage: {
						title: "Spravovat",
						table: {
							user: {
								title: "Uživatel",
							},
							role: {
								combobox: {
									placeholder: "Hledat role...",
									notFound: "Nebyly nalezeny žádné role.",
								},
								title: "Role",
							},
						},
						noCells: "Žádné výsledky.",
						pagination: {
							next: "Další",
							prev: "Předchozí",
						},
					},
				},
			},
		},
		search: {
			placeholder: "Vyhledat kalendáře...",
		},
		account: {
			settings: "Nastavení",
			signOut: "Odhlásit se",
			modal: {
				header: {
					title: "Účet",
					description: "Spravujte informace o svém účtu",
				},
				profile: {
					title: "Profil",
					email: {
						title: "Email",
						label: "Váši aktuální emailová adresa je:",
					},
					profile: {
						title: "Profil",
						nameLabel: "Vaše jméno je:",
						setNameButton: "Nastavit jméno",
						image: {
							upload: "Nahrát obrázek",
							delete: "Smazat obrázek",
						},
						inputs: {
							name: {
								label: "Jméno",
								placeholder: "Vaše jméno",
							},
							submit: "Odeslat",
						},
					},
					password: {
						title: "Heslo",
						changePasswordButton: "Změnit heslo",
						inputs: {
							password: {
								label: "Heslo",
								placeholder: "Vaše heslo",
							},
							confirmPassword: {
								label: "Potvrdit heslo",
								placeholder: "Potvrďte své heslo",
							},
							submit: "Odeslat",
						},
					},
					google: {
						title: "Google",
						connectAccountButton: "Připojit účet",
					},
				},
				danger: {
					title: "Nebezpečí",
					subheader: "Smazat účet",
					description: "Smazat účet a všechna s ním spojená data",
					buttonTitle: "SMAZAT ÚČET",
					deleteAlert: {
						title: "Jste si naprosto jisti?",
						description:
							"Tato akce nelze vrátit zpět. Tímto se váš účet trvale smaže a vaše data budou odstraněna z našich serverů.",
						cancel: "Storno",
						continue: "Smazat",
					},
				},
			},
		},
	},
} as const;

export { calendars };
