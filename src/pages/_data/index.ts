export async function getPageData(ctx) {
	console.log(ctx);
	return {
		props: {
			data: [1, 2, 3],
		},
	};
}
