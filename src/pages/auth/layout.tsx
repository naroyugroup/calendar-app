import { MenuFilter } from "@/enums";
import { getCurrentUser } from "@api/users/get-current-user";
import { useAuth } from "@hooks/use-auth";
import { authLayoutRoute } from "@router/routes.tsx";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useRouter } from "@tanstack/react-router";
import { useEffect, useLayoutEffect } from "react";

const AuthLayout = () => {
	const auth = useAuth();

	const router = useRouter();
	const search = authLayoutRoute.useSearch();
	const navigate = authLayoutRoute.useNavigate();

	const { data, refetch } = useQuery({
		queryKey: ["current-user"],
		queryFn: () => getCurrentUser(),
		gcTime: 0,
		retry: 0,
		refetchOnWindowFocus: false,
		meta: {
			shouldBeHandledByGlobalErrorHandler: false,
		},
		enabled: false,
	});

	// Meta not working here when enabled
	useEffect(() => {
		refetch();
	}, [refetch]);

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

	return <Outlet />;
};

export { AuthLayout };
