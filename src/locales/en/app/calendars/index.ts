const calendars = {
	sidebar: {
		title: "Online calendar",
		filters: {
			all: "All Calendars",
			favorites: "Favorites",
		},
		themeButton: {
			light: "Light",
			dark: "Dark",
		},
		langPicker: {
			placeholder: "Find language...",
			notFound: "No languages found.",
		},
	},
	content: {
		createNewCalendar: {
			modalTriggerHint: "Create new calendar",
			modal: {
				title: "New calendar",
				form: {
					titleInput: {
						label: "Title",
						placeholder: "Your calendar title",
					},
					submit: "SUBMIT",
				},
				toast: {
					title: "Created successfully",
					label:
						"You can now invite people to your calendar in calendar settings.",
				},
			},
		},
		card: {
			avatarMoreMembers: "{{number}} more",
			emptyStates: {
				all: {
					header: "No Calendars Available",
					subheader: "There are currently no calendars to display.",
				},
				favorites: {
					header: "Your Favorites List is Empty",
					subheader: "Start adding your favorite calendars to this list!",
				},
				google: {
					header: "No Google Calendars Found",
					subheader: "You haven't synced any Google calendars yet.",
				},
				error: {
					header: "Oops! Something Went Wrong",
					subheader:
						"We encountered an error while loading your calendars. Please try again later.",
				},
				search: {
					header: "Oops! No Calendars Found",
					subheader: "There are no calendars matching your search.",
				},
			},
			modal: {
				title: "Settings",
				description: "Manage organization settings",
				settings: {
					title: "Settings",
					edit: {
						title: "Edit",
						form: {
							titleInput: {
								label: "Title",
								placeholder: "Your calendar title",
							},
							submit: "UPDATE",
						},
						toast: {
							title: "Changed successfully",
							label: "Your calendar data was successfully changed.",
						},
					},
					danger: {
						title: "Danger",
						subheader: "Delete Calendar",
						description: "Delete your calendar and all its associated data",
						buttonTitle: "DELETE CALENDAR",
						deleteAlert: {
							title: "Are you absolutely sure?",
							description:
								"This action cannot be undone. This will permanently delete your calendar and remove your data from our servers.",
							cancel: "Cancel",
							continue: "Delete",
						},
					},
				},
				members: {
					title: "Members",
					invite: {
						title: "Invite",
						inviteButton: "Invite",
						input: {
							label: "Email list",
							placeholder: "Invite email",
						},
					},
					manage: {
						title: "Manage",
						table: {
							user: {
								title: "User",
							},
							role: {
								combobox: {
									placeholder: "Search roles...",
									notFound: "No roles found.",
								},
								title: "Role",
							},
						},
						noCells: "No results.",
						pagination: {
							next: "Next",
							prev: "Previous",
						},
					},
				},
			},
		},
		search: {
			placeholder: "Search calendars...",
		},
		account: {
			settings: "Settings",
			signOut: "Sign Out",
			modal: {
				header: {
					title: "Account",
					description: "Manage your account information",
				},
				profile: {
					title: "Profile",
					email: {
						title: "Email",
						label: "Your current email address is:",
					},
					profile: {
						title: "Profile",
						nameLabel: "Your name is:",
						setNameButton: "Set name",
						image: {
							upload: "Upload image",
							delete: "Delete image",
						},
						inputs: {
							name: {
								label: "Name",
								placeholder: "Your name",
							},
							submit: "SUBMIT",
						},
					},
					password: {
						title: "Password",
						changePasswordButton: "Change password",
						inputs: {
							password: {
								label: "Password",
								placeholder: "Your password",
							},
							confirmPassword: {
								label: "Confirm password",
								placeholder: "Confirm your password",
							},
							submit: "SUBMIT",
						},
					},
					google: {
						title: "Google",
						connectAccountButton: "Connect account",
					},
				},
				danger: {
					title: "Danger",
					subheader: "Delete Account",
					description: "Delete your account and all its associated data",
					buttonTitle: "DELETE ACCOUNT",
					deleteAlert: {
						title: "Are you absolutely sure?",
						description:
							"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
						cancel: "Cancel",
						continue: "Delete",
					},
				},
			},
		},
	},
} as const;

export { calendars };
