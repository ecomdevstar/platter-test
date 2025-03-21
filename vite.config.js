import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import cleanup from "@by-association-only/vite-plugin-shopify-clean";
import pageReload from "vite-plugin-page-reload";

export default defineConfig({
	plugins: [
		shopify(),
		cleanup({
			assets: {
				js: ["assets/main.js", "assets/js/*.js"],
				css: "assets/main.css",
			},
			skipConfirmation: true,
		}),
		,
		pageReload("/tmp/theme.update"),
	],
	build: {
		emptyOutDir: false,
	},
});
