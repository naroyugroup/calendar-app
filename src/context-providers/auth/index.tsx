import type { CurrentUser } from "@api/users/get-current-user/types.ts";
import React, { useState } from "react";
import type { AuthContextProviderProps, AuthContextValues } from "./types.ts";
export const AuthContext = React.createContext<AuthContextValues | null>(null);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
	const isAuthenticated = !!currentUser;

	const logout = React.useCallback(() => {
		setCurrentUser(null);
	}, []);

	const login = React.useCallback((user: CurrentUser) => {
		setCurrentUser(user);
	}, []);

	return (
		<AuthContext.Provider
			value={{ currentUser, isAuthenticated, logout, login }}
		>
			{children}
		</AuthContext.Provider>
	);
};
