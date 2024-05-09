import { Day } from "@pages/app/calendarId/index/components/full-page-calendar/components/month/components/day";
import type { MonthProps } from "@pages/app/calendarId/index/components/full-page-calendar/components/month/types.ts";
import React from "react";

const Month: React.FC<MonthProps> = ({ month }) => {
	if (Number(month[5][0].format("D")) > 20) {
		return (
			<div className="flex-1 grid grid-cols-7 grid-rows-6 overflow-y-scroll">
				{month.map((row, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<React.Fragment key={i}>
						{row.map((day, idx) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Day day={day} key={idx} rowIdx={i} />
						))}
					</React.Fragment>
				))}
			</div>
		);
	}

	return (
		<div className="flex-1 grid grid-cols-7 grid-rows-5">
			{month.map((row, i) => {
				if (i === 5) return null;
				return (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<React.Fragment key={i}>
						{row.map((day, idx) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Day day={day} key={idx} rowIdx={i} />
						))}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export { Month };
