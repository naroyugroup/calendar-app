import { MenuFilter } from "@/enums";
import type { CalendarCard } from "@pages/app/calendars/types.ts";

export const calendarsTest: CalendarCard[] = [
	{
		id: "C1",
		title: "First",
		filter: MenuFilter.Favorites,
		users: [
			{
				id: "U1",
				image: "",
				fallbackName: "Pets",
				alt: "",
			},
			{
				id: "U2",
				image: "https://github.com/shadcn.png",
				fallbackName: "Test",
				alt: "",
			},
			{
				id: "U3",
				image: "https://github.com/shadcn.png",
				fallbackName: "Petr",
				alt: "",
			},
			{
				id: "U4",
				image: "https://github.com/shadcn.png",
				fallbackName: "Alex",
				alt: "",
			},
		],
	},
	{
		id: "C2",
		title: "Second",
		filter: MenuFilter.All,
		users: [
			{
				id: "U10",
				fallbackName: "Dan",
				alt: "",
			},
			{
				id: "U11",
				image: "",
				fallbackName: "Kiril",
				alt: "",
			},
		],
	},
	{
		id: "C3",
		title: "Third",
		filter: MenuFilter.All,
		users: [],
	},
	{
		id: "C4",
		title: "Third",
		filter: MenuFilter.Favorites,
		users: [],
	},
	// {
	// 	id: "C5",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C6",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C7",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C8",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C9",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C10",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C11",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C12",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C13",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C14",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C15",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C16",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C17",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C18",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C19",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C20",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
	// {
	// 	id: "C21",
	// 	title: "Third",
	// 	filter: MenuFilter.All,
	// 	users: [],
	// },
	// {
	// 	id: "C22",
	// 	title: "Third",
	// 	filter: MenuFilter.Favorites,
	// 	users: [],
	// },
] as const;
