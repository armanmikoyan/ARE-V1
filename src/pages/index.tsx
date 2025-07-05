import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import DefaultLayout from '@/layouts/default';
import Hero from '@/components/hero';

export default function Home({ data }) {
	void data;
	return (
		<>
			<Head>
				<title>Promptix - Real-Time AI Image Generation</title>
				<meta
					name="description"
					content="Generate stunning images instantly with Promptix's real-time AI-powered image generation platform."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="./icons/favicon.ico" />
			</Head>
			<DefaultLayout>
				<Hero />
			</DefaultLayout>
		</>
	);
}

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
// 	void ctx;
// 	return {
// 		props: {
// 			data: [1, 2, 3],
// 		},
// 	};
// }

export async function getStaticProps(ctx: GetServerSidePropsContext) {
	void ctx;
	return {
		props: {
			data: [1, 2, 3],
		},
	};
}
