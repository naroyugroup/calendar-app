import { cn } from "@/lib/utils";
import type { DateSegmentProps } from "@components/date-time-pickers/components/data-segment/types.ts";
import type React from "react";
import { useRef } from "react";
import { useDateSegment } from "react-aria";

const DateSegment: React.FC<DateSegmentProps> = ({ segment, state }) => {
	const ref = useRef(null);

	const {
		segmentProps: { ...segmentProps },
	} = useDateSegment(segment, state, ref);

	return (
		<div
			{...segmentProps}
			ref={ref}
			className={cn(
				"focus:rounded-[2px] focus:bg-accent focus:text-accent-foreground focus:outline-none",
				segment.type !== "literal" ? "px-[1px]" : "",
				segment.isPlaceholder ? "text-muted-foreground" : "",
			)}
		>
			{segment.text}
		</div>
	);
};

export { DateSegment };
