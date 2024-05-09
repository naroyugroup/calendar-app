import "@/i18n.ts";
import "@/index.css";
import { RouterComponent } from "@/router";
import { AuthContextProvider } from "@context-providers/auth";
import "dayjs/locale/cs";
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<AuthContextProvider>
				<RouterComponent />
			</AuthContextProvider>
		</React.StrictMode>,
	);
}
