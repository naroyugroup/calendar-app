import { Skeleton } from "@components/ui/skeleton/index.tsx";
import type React from "react";

const CalendarListSkeleton: React.FC = () => {
	return (
		<div
			className={
				"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-8 gap-5 mt-8 pb-10"
			}
		>
			<Skeleton
				className={
					"relative group aspect-[130/100] border rounded-lg flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-md"
				}
			/>
			<Skeleton
				className={
					"relative group aspect-[130/100] border rounded-lg flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-md"
				}
			/>
			<Skeleton
				className={
					"relative group aspect-[130/100] border rounded-lg flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-md"
				}
			/>
			<Skeleton
				className={
					"relative group aspect-[130/100] border rounded-lg flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-md"
				}
			/>
			<Skeleton
				className={
					"relative group aspect-[130/100] border rounded-lg flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-md"
				}
			/>
		</div>
	);
};

export { CalendarListSkeleton };
