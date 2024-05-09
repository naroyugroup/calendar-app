import { putUpdateCurrentUserPassword } from "@api/users/update-current-user-password";
import type { PutUpdateCurrentUserPasswordParams } from "@api/users/update-current-user-password/types.ts";
import { DialogAccordion } from "@components/account/components/account-dialog-content/components/dialog-accordion";
import { Container } from "@components/account/components/account-dialog-content/components/dialog-accordion/components/container";
import { changePasswordSchema } from "@components/account/components/account-dialog-content/components/password-section/schemas.ts";
import type { ChangePasswordFormData } from "@components/account/components/account-dialog-content/components/password-section/types.ts";
import { CustomInput } from "@components/custom-input";
import { DialogActionButton } from "@components/dialog-action-button";
import { Button } from "@components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@hooks/use-auth";
import { AuthForm } from "@pages/auth/components/auth-form";
import { useMutation } from "@tanstack/react-query";
import type React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RiLockPasswordFill } from "react-icons/ri";

const PasswordSection: React.FC = () => {
	const { t } = useTranslation("appCalendars");
	const { currentUser } = useAuth();
	const [openForm, setOpenForm] = useState(false);

	const {
		control,
		formState: { isSubmitting },
		handleSubmit,
	} = useForm<ChangePasswordFormData>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: { password: "", confirmPassword: "" },
	});

	const { mutate } = useMutation({
		mutationFn: ({ requestData }: PutUpdateCurrentUserPasswordParams) =>
			putUpdateCurrentUserPassword({ requestData }),
		onSuccess: () => {
			setOpenForm(false);
		},
	});

	const onSubmit = async (formValues: ChangePasswordFormData) => {
		control._disableForm(true);

		mutate(
			{
				requestData: {
					password: formValues.password,
				},
			},
			{
				onSettled: () => {
					control._disableForm(false);
					control._reset();
				},
			},
		);
	};

	if (currentUser === null) return null;

	return (
		<DialogAccordion
			icon={RiLockPasswordFill}
			title={t("content.account.modal.profile.password.title")}
		>
			<DialogActionButton
				onClick={() => setOpenForm((open) => !open)}
				disabled={currentUser.googleId !== null}
				title={t("content.account.modal.profile.password.changePasswordButton")}
			/>
			{openForm && (
				<Container>
					<AuthForm onSubmit={handleSubmit(onSubmit)}>
						<Controller
							control={control}
							name={"password"}
							render={({ field: { ...fieldProps }, fieldState: { error } }) => (
								<CustomInput
									type={"password"}
									label={t(
										"content.account.modal.profile.password.inputs.password.label",
									)}
									placeholder={t(
										"content.account.modal.profile.password.inputs.password.placeholder",
									)}
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
									label={t(
										"content.account.modal.profile.password.inputs.confirmPassword.label",
									)}
									placeholder={t(
										"content.account.modal.profile.password.inputs.confirmPassword.placeholder",
									)}
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
							{t("content.account.modal.profile.password.inputs.submit")}
						</Button>
					</AuthForm>
				</Container>
			)}
		</DialogAccordion>
	);
};

export { PasswordSection };
