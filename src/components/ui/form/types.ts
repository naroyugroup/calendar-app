import type * as LabelPrimitive from "@radix-ui/react-label";
import type * as React from "react";
import type { FieldPath, FieldValues } from "react-hook-form";

export type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName;
};

export type FormItemContextValue = {
	id: string;
};

export interface FormLabelProps
	extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
	disableError?: boolean;
}
