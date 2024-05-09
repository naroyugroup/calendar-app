import { InputIcon } from "@components/custom-input/input-icon";
import { InputWrapper } from "@components/custom-input/input-wrapper";
import type { CustomInputProps } from "@components/custom-input/types.ts";
import { FormError } from "@components/ui/form-error";
import { Input } from "@components/ui/input";
import { Overlay } from "@components/ui/overlay";
import { cn } from "@lib/utils.ts";
import { Label } from "@radix-ui/react-label";
import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
	(
		{
			name,
			placeholder,
			enableClearButton,
			clearFunc,
			label,
			errorMessage,
			className,
			disabled,
			value,
			type,
			...rest
		},
		ref,
	) => {
		const [hidePassword, setHidePassword] = useState(type === "password");

		const toggleHidePassword = () => {
			setHidePassword((prevState) => !prevState);
		};

		const computeInputType = () => {
			if (type === "password") return hidePassword ? "password" : "text";
			return type;
		};

		return (
			<InputWrapper className={className}>
				<Label
					className={cn("text-sm", errorMessage && "text-destructive")}
					htmlFor={name}
				>
					{label}
				</Label>
				<div className={"relative"}>
					<Input
						className={cn(
							"truncate",
							type === "password" && "pr-8",
							enableClearButton && "pr-7",
						)}
						ref={ref}
						id={name}
						disabled={disabled}
						value={value}
						name={name}
						type={computeInputType()}
						placeholder={placeholder}
						{...rest}
					/>
					{type !== "password" &&
						enableClearButton &&
						value &&
						value.length !== 0 && (
							<InputIcon onClick={clearFunc}>
								<X className={"size-4"} />
							</InputIcon>
						)}

					{type === "password" && value && value.length !== 0 && (
						<InputIcon onClick={toggleHidePassword}>
							{!hidePassword && <Eye className={"size-[1.25rem]"} />}
							{hidePassword && <EyeOff className={"size-[1.25rem]"} />}
						</InputIcon>
					)}
				</div>
				{errorMessage && <FormError>{errorMessage}</FormError>}
				{disabled && <Overlay className={"cursor-not-allowed"} />}
			</InputWrapper>
		);
	},
);
CustomInput.displayName = "CustomInput";

export { CustomInput };
