import { getAllCalendarsGroup } from "@api/calendars/get-all-calendars";
import { putUpdateCurrentUserName } from "@api/users/update-current-user-name";
import type { PutUpdateCurrentUserNameParams } from "@api/users/update-current-user-name/types.ts";
import { DialogAccordion } from "@components/account/components/account-dialog-content/components/dialog-accordion";
import { Container } from "@components/account/components/account-dialog-content/components/dialog-accordion/components/container";
import { changeNameSchema } from "@components/account/components/account-dialog-content/components/profile-section/schemas.ts";
import type { ChangeNameFormData } from "@components/account/components/account-dialog-content/components/profile-section/types.ts";
import { CustomInput } from "@components/custom-input";
import { DialogActionButton } from "@components/dialog-action-button";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@hooks/use-auth";
import { AuthForm } from "@pages/auth/components/auth-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";

const ProfileSection: React.FC = () => {
	const { t } = useTranslation("appCalendars");
	const { currentUser, login } = useAuth();
	const [openForm, setOpenForm] = useState(false);

	const {
		control,
		formState: { isSubmitting },
		handleSubmit,
		setValue,
	} = useForm<ChangeNameFormData>({
		resolver: zodResolver(changeNameSchema),
		defaultValues: { name: currentUser?.name || "" },
	});

	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: ({ requestData }: PutUpdateCurrentUserNameParams) =>
			putUpdateCurrentUserName({ requestData }),
		onSuccess: (data) => {
			if (!data) return;
			setOpenForm(false);
			login(data);
			return queryClient.invalidateQueries({
				queryKey: getAllCalendarsGroup().queryKey,
			});
		},
	});

	const onSubmit = async (formValues: ChangeNameFormData) => {
		if (formValues.name === currentUser?.name) return;
		control._disableForm(true);

		mutate(
			{
				requestData: {
					name: formValues.name,
				},
			},
			{
				onSettled: () => {
					control._disableForm(false);
				},
			},
		);
	};

	if (currentUser === null) return null;

	return (
		<DialogAccordion
			icon={CgProfile}
			title={t("content.account.modal.profile.profile.title")}
		>
			<Container>
				<div className={"flex-row flex gap-x-1 overflow-x-auto items-center"}>
					<Avatar className={"size-7"}>
						<AvatarImage src={currentUser.picture || undefined} />
						<AvatarFallback
							className={"bg-primary/90 text-primary-foreground font-semibold"}
						>
							{currentUser.name[0]}
						</AvatarFallback>
					</Avatar>
					<Button
						size={"sm"}
						variant={"link"}
						className={"text-sm default-link"}
						disabled
					>
						{t("content.account.modal.profile.profile.image.upload")}
					</Button>

					{currentUser.picture && (
						<Button
							size={"sm"}
							variant={"link"}
							className={"text-sm text-destructive"}
						>
							{t("content.account.modal.profile.profile.image.delete")}
						</Button>
					)}
				</div>
			</Container>

			<Container>
				{t("content.account.modal.profile.profile.nameLabel")}&nbsp;
				<span className={"font-semibold"}>{currentUser.name}</span>
			</Container>

			<DialogActionButton
				onClick={() => setOpenForm((open) => !open)}
				title={t("content.account.modal.profile.profile.setNameButton")}
			/>

			{openForm && (
				<Container>
					<AuthForm onSubmit={handleSubmit(onSubmit)}>
						<Controller
							control={control}
							name={"name"}
							render={({ field: { ...fieldProps }, fieldState: { error } }) => (
								<CustomInput
									enableClearButton
									clearFunc={() => {
										setValue("name", "");
									}}
									type={"text"}
									label={t(
										"content.account.modal.profile.profile.inputs.name.label",
									)}
									placeholder={t(
										"content.account.modal.profile.profile.inputs.name.placeholder",
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
							{t("content.account.modal.profile.profile.inputs.submit")}
						</Button>
					</AuthForm>
				</Container>
			)}
		</DialogAccordion>
	);
};

export { ProfileSection };
