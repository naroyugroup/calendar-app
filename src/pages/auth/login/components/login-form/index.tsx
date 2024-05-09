import { MenuFilter } from "@/enums";
import { postLogin } from "@api/auth/login";
import { getCurrentUser } from "@api/users/get-current-user";
import { CustomInput } from "@components/custom-input";
import { Button } from "@components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@hooks/use-auth";
import { AuthForm } from "@pages/auth/components/auth-form";
import { loginSchema } from "@pages/auth/login/components/login-form/schemas.ts";
import type { LoginFormValues } from "@pages/auth/login/components/login-form/types.ts";
import { loginRoute } from "@router/routes.tsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import type React from "react";
import { useLayoutEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const LoginForm: React.FC = () => {
	const {
		control,
		formState: { isSubmitting },
		handleSubmit,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	const { t } = useTranslation("auth");

	const auth = useAuth();

	const router = useRouter();
	const search = loginRoute.useSearch();
	const navigate = loginRoute.useNavigate();

	const { mutate: loginRequest } = useMutation({
		mutationFn: (formData: LoginFormValues) => {
			return postLogin({ email: formData.email, password: formData.password });
		},
	});

	const { data, refetch } = useQuery({
		queryKey: ["current-user"],
		queryFn: () => getCurrentUser(),
		enabled: false,
		gcTime: 0,
	});

	const onSubmit = handleSubmit(async (formValues: LoginFormValues) => {
		control._disableForm(true);

		loginRequest(formValues, {
			onSuccess: () => {
				refetch();
			},
			onSettled: () => {
				control._disableForm(false);
				control._reset();
			},
		});
	});

	useLayoutEffect(() => {
		if (data) {
			auth.login(data);
			router.invalidate().finally(() => {
				navigate({
					to: search.redirect || "/calendars",
					search: !search.redirect
						? {
								filter: MenuFilter.All,
							}
						: undefined,
				});
			});
		}
	}, [auth.login, router.invalidate, navigate, search.redirect, data]);

	return (
		<AuthForm onSubmit={onSubmit}>
			<Controller
				control={control}
				name={"email"}
				render={({ field: { ...fieldProps }, fieldState: { error } }) => (
					<CustomInput
						type={"email"}
						label={t("login.form.email.label")}
						placeholder={t("login.form.email.placeholder")}
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
						label={t("login.form.password.label")}
						placeholder={t("login.form.password.placeholder")}
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
				{t("login.form.submitButton")}
			</Button>
		</AuthForm>
	);
};

export { LoginForm };
