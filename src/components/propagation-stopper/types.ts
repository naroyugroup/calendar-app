import type React from "react";

export interface PropagationStopperProps
	extends React.HTMLAttributes<HTMLDivElement> {
	disableImmediatePropagation?: boolean;
	disableNativePreventDefault?: boolean;
	disablePreventDefault?: boolean;
	disableStopPropagation?: boolean;
}
