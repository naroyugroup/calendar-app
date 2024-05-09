import type React from "react";

export interface AuthHeaderProps {
	header: string;
	label: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ header, label }) => {
	return (
		<div className={"flex flex-col gap-y-2.5 mb-4"}>
			<h1 className={"font-bold text-2xl text-muted-foreground"}>{header}</h1>

			<h2>{label}</h2>
		</div>
	);
};

export { AuthHeader };
