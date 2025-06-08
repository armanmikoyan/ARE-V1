import '@/globals/styles.css';
import type { AppProps } from 'next/app';
import { useInitGlobalTheme } from '../globals/hooks';

export default function App({ Component, pageProps }: AppProps) {
	useInitGlobalTheme();

	return (
		<>
			<Component {...pageProps} />;
		</>
	);
}
