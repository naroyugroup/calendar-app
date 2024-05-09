import { AuthHeader } from "@pages/auth/components/auth-header";
import { AuthIcon } from "@pages/auth/components/auth-icon";
import { Divider } from "@pages/auth/components/divider";
import { IconsWrapper } from "@pages/auth/components/icons-wrapper";
import { TextLinkPrompt } from "@pages/auth/components/text-link-prompt";
import { Wrapper } from "@pages/auth/components/wrapper";
import { LoginForm } from "@pages/auth/login/components/login-form";
import type React from "react";
import { useTranslation } from "react-i18next";
import { FaGoogle } from "react-icons/fa";

const LoginPage: React.FC = () => {
	const { t } = useTranslation("auth");
	return (
		<Wrapper className={"min-h-[41.563rem]"}>
			<AuthHeader label={t("login.description")} header={t("login.title")} />
			<LoginForm />

			<TextLinkPrompt
				text={t("login.noAccount.label")}
				linkLabel={t("login.noAccount.link")}
				to={"/register"}
			/>

			<Divider label={t("login.separator")} />

			<IconsWrapper>
				<AuthIcon icon={FaGoogle} />
			</IconsWrapper>
		</Wrapper>
	);
};

export { LoginPage };
