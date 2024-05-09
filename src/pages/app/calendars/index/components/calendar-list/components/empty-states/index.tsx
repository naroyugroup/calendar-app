import type { EmptyStateProps } from "@pages/app/calendars/index/components/calendar-list/components/empty-states/types.ts";
import type React from "react";

export const EmptyState: React.FC<EmptyStateProps> = ({
	header,
	subheader,
	imageSrc,
	alt,
	height,
	width,
	children,
	icon: Icon,
}) => {
	return (
		<div className={"flex flex-1 flex-col items-center justify-center"}>
			{imageSrc && (
				<img
					src={imageSrc}
					alt={alt || "Empty"}
					height={height || 200}
					width={width || 200}
				/>
			)}
			{Icon && <Icon size={80} />}
			<h2 className={"text-2xl font-semibold mt-6"}>{header}</h2>
			<p className={"text-muted-foreground text-sm mt-2"}>{subheader}</p>
			{children}
		</div>
	);
};
