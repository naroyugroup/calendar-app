import { postRegister } from "@api/auth/register";
import { CustomInput } from "@components/custom-input";
import { Button } from "@components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthForm } from "@pages/auth/components/auth-form";
import { registerSchema } from "@pages/auth/register/components/register-form/schemas.ts";
import type { RegisterFormValues } from "@pages/auth/register/components/register-form/types.ts";
import { registerRoute } from "@router/routes.tsx";
import { useMutation } from "@tanstack/react-query";
import type React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const RegisterForm: React.FC = () => {
	const { t } = useTranslation("auth");

	const {
		control,
		formState: { isSubmitting },
		handleSubmit,
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: { email: "", name: "", password: "", confirmPassword: "" },
	});

	const navigate = registerRoute.useNavigate();

	const { mutate } = useMutation({
		mutationFn: (formData: RegisterFormValues) => {
			return postRegister({
				email: formData.email,
				password: formData.password,
				name: formData.name,
			});
		},
	});

	const onSubmit = async (formValues: RegisterFormValues) => {
		control._disableForm(true);
		mutate(formValues, {
			onSuccess: () => {
				navigate({ to: "/login" });
			},
			onSettled: () => {
				control._disableForm(false);
				control._reset();
			},
		});
	};
	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				name={"email"}
				render={({ field: { ...fieldProps }, fieldState: { error } }) => (
					<CustomInput
						type={"email"}
						label={t("registration.form.email.label")}
						placeholder={t("registration.form.email.placeholder")}
						errorMessage={error?.message}
						{...fieldProps}
					/>
				)}
			/>

			<Controller
				control={control}
				name={"name"}
				render={({ field: { ...fieldProps }, fieldState: { error } }) => (
					<CustomInput
						type={"text"}
						label={t("registration.form.name.label")}
						placeholder={t("registration.form.name.placeholder")}
						errorMessage={error?.message}
						{...fieldProps}
					/>
				)}
			/>

			<Controller
				control={control}
				name={"password"}
				render={({ field: { ...fieldProps }, fieldState: { error } }) => (
					<CustomInput
						type={"password"}
						label={t("registration.form.password.label")}
						placeholder={t("registration.form.password.placeholder")}
						errorMessage={error?.message}
						{...fieldProps}
					/>
				)}
			/>

			<Controller
				control={control}
				name={"confirmPassword"}
				render={({ field: { ...fieldProps }, fieldState: { error } }) => (
					<CustomInput
						type={"password"}
						label={t("registration.form.confirmPassword.label")}
						placeholder={t("registration.form.confirmPassword.placeholder")}
						errorMessage={error?.message}
						{...fieldProps}
					/>
				)}
			/>

			<Button
				type={"submit"}
				disabled={isSubmitting}
				className={"max-w-[10rem] w-full self-center"}
			>
				{t("registration.form.submitButton")}
			</Button>
		</AuthForm>
	);
};

export { RegisterForm };
