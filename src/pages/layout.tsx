import { Toaster } from "@components/ui/sonner";
import { ThemeContextProvider } from "@context-providers/theme";
import {
	MutationCache,
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { I18nProvider } from "react-aria";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error, query) => {
			if (query.meta?.shouldBeHandledByGlobalErrorHandler === false) return;
			toast.error(`${error.message}`);
		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			toast.error(`${error.message}`);
		},
		onSuccess: (_data, _variables, _context, mutation) => {
			if (mutation.meta?.shouldBeHandledByGlobalSuccessHandler === false)
				return;
			toast.success("Success");
		},
	}),
	defaultOptions: {
		queries: {
			retry: 1,
		},
	},
});

const RootLayout = () => {
	const { i18n } = useTranslation();
	dayjs.locale(i18n.language);
	dayjs.extend(utc);
	dayjs.extend(timezone);
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeContextProvider>
				<I18nProvider
					locale={`${i18n.language}-${i18n.language.toUpperCase()}`}
				>
					<Outlet />
					{/*<TanStackRouterDevtools />*/}
					<Toaster position={"bottom-left"} />
				</I18nProvider>
			</ThemeContextProvider>
		</QueryClientProvider>
	);
};

export { RootLayout };
