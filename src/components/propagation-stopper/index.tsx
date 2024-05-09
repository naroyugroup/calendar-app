import type { PropagationStopperProps } from "@components/propagation-stopper/types.ts";
import type React from "react";

const PropagationStopper: React.FC<PropagationStopperProps> = ({
	onClick,
	children,
	disableImmediatePropagation,
	disableNativePreventDefault,
	disablePreventDefault,
	disableStopPropagation,
	...props
}) => {
	const preventDefaultPropagation = (
		e: React.MouseEvent<HTMLElement, MouseEvent>,
	) => {
		!disableImmediatePropagation && e.nativeEvent.stopImmediatePropagation();
		!disableNativePreventDefault && e.nativeEvent.preventDefault();
		!disablePreventDefault && e.preventDefault();
		!disableStopPropagation && e.stopPropagation();
	};
	return (
		<div
			{...props}
			onClick={(e) => {
				preventDefaultPropagation(e);
				if (onClick) onClick(e);
			}}
		>
			{children}
		</div>
	);
};

export { PropagationStopper };
