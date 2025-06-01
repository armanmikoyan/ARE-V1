import { GetServerSidePropsContext } from 'next';

export async function getPageData(ctx: GetServerSidePropsContext) {
	void ctx;
	return {
		props: {
			data: [1, 2, 3],
		},
	};
}
