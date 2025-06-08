import '@/globals/styles.css';
import type { AppProps } from 'next/app';
import { InitGlobalTheme } from '../globals/utils';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<InitGlobalTheme />
			<Component {...pageProps} />;
		</>
	);
}
