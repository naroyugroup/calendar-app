import { Recurrence } from "@/enums";

export const recurrenceSelectValues = [
	{
		value: Recurrence.DoesNotRepeat,
		label: "Does not repeat",
	},
	{
		value: Recurrence.Daily,
		label: "Daily",
	},
	{
		value: Recurrence.Weekly,
		label: "Weekly",
	},
	{
		value: Recurrence.Monthly,
		label: "Monthly",
	},
	{
		value: Recurrence.Yearly,
		label: "Yearly",
	},
];
