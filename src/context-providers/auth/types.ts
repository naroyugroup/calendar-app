import type { CurrentUser } from "@api/users/get-current-user/types.ts";
import type React from "react";

export interface AuthContextValues {
	currentUser: CurrentUser | null;
	isAuthenticated: boolean;
	logout: () => void;
	login: (user: CurrentUser) => void;
}

export interface AuthContextProviderProps {
	children: React.ReactNode;
}
