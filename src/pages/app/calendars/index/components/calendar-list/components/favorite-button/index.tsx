import { getAllCalendarsGroup } from "@api/calendars/get-all-calendars";
import { putFavorite } from "@api/calendars/put-favorite";
import type { PutFavoriteParams } from "@api/calendars/put-favorite/types.ts";
import { Button } from "@components/ui/button";
import { useCalendar } from "@hooks/use-calendar";
import { cn } from "@lib/utils.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Star } from "lucide-react";
import type React from "react";

const FavoriteButton: React.FC = () => {
	const { calendar } = useCalendar();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: ({ calendarId, requestData }: PutFavoriteParams) => {
			return putFavorite({ calendarId, requestData });
		},
		onSuccess: (data) => {
			const queryData = queryClient.getQueryData(
				getAllCalendarsGroup().queryKey,
			);

			if (!queryData || !data) return;

			const freshData = queryData.map((item) => {
				if (item.id !== data.id) return item;
				return {
					...item,
					favorite: data.favorite,
				};
			});

			return queryClient.setQueryData(
				getAllCalendarsGroup().queryKey,
				freshData,
			);
		},
		// meta: {
		// 	shouldBeHandledByGlobalSuccessHandler: false
		// }
	});

	const handleClick = () => {
		mutate({
			calendarId: `${calendar.id}`,
			requestData: { favorite: !calendar.favorite },
		});
	};

	return (
		<Button
			type={"button"}
			variant={"none"}
			className={
				"absolute top-1 left-1 md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none z-20 focus-visible:opacity-100"
			}
			onClick={handleClick}
		>
			<Star
				className={cn(
					"text-yellow-300 opacity-75 size-5 hover:opacity-100 transition-opacity",
					calendar.favorite && "fill-yellow-300",
				)}
			/>
		</Button>
	);
};

export { FavoriteButton };
