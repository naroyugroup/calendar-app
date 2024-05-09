import path from "node:path";
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), viteBasicSslPlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@context-providers": path.resolve(__dirname, "./src/context-providers"),
			"@helpers": path.resolve(__dirname, "./src/helpers"),
			"@api": path.resolve(__dirname, "./src/api"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@lib": path.resolve(__dirname, "./src/lib"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@enums": path.resolve(__dirname, "./src/enums"),
			"@locales": path.resolve(__dirname, "./src/locales"),
			"@schemas": path.resolve(__dirname, "./src/schemas"),
			"@router": path.resolve(__dirname, "./src/router"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",

				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
						return "assets/images/[name]-[hash][extname]";
					}

					if (/\.css$/.test(name ?? "")) {
						return "assets/css/[name]-[hash][extname]";
					}

					return "assets/[name]-[hash][extname]";
				},
			},
		},
	},
});
