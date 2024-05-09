import { AuthContext } from "@context-providers/auth";
import type { AuthContextValues } from "@context-providers/auth/types.ts";
import React from "react";

const useAuth = (): AuthContextValues => {
	const context = React.useContext(AuthContext);

	if (context === null) {
		throw new Error("useAuth must be used within a AuthContextProvider");
	}

	return context;
};

export { useAuth };
