import "@tanstack/react-query";

interface MyMeta extends Record<string, unknown> {
	shouldBeHandledByGlobalErrorHandler?: boolean;
	shouldBeHandledByGlobalSuccessHandler?: boolean;
}
declare module "@tanstack/react-query" {
	interface Register {
		queryMeta: MyMeta;
		mutationMeta: MyMeta;
	}
}
