import { AuthHeader } from "@pages/auth/components/auth-header";
import { AuthIcon } from "@pages/auth/components/auth-icon";
import { Divider } from "@pages/auth/components/divider";
import { IconsWrapper } from "@pages/auth/components/icons-wrapper";
import { TextLinkPrompt } from "@pages/auth/components/text-link-prompt";
import { Wrapper } from "@pages/auth/components/wrapper";
import { RegisterForm } from "@pages/auth/register/components/register-form";
import type React from "react";
import { useTranslation } from "react-i18next";
import { FaGoogle } from "react-icons/fa";

const RegisterPage: React.FC = () => {
	const { t } = useTranslation("auth");

	return (
		<Wrapper className={"min-h-[50.625rem]"}>
			<AuthHeader
				label={t("registration.description")}
				header={t("registration.title")}
			/>

			<RegisterForm />

			<TextLinkPrompt
				text={t("registration.haveAccount.label")}
				linkLabel={t("registration.haveAccount.link")}
				to={"/login"}
			/>

			<Divider label={t("registration.separator")} />

			<IconsWrapper>
				<AuthIcon icon={FaGoogle} />
			</IconsWrapper>
		</Wrapper>
	);
};

export { RegisterPage };
