import React from 'react';
import Header from '@/components/header';
import { Main } from './styles';
import { Anonymous_Pro as AnonymousPro } from 'next/font/google';

const anonymousPro = AnonymousPro({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-anonymous-pro',
	display: 'swap',
});

function DefaultLayout({ children }) {
	return (
		<Main className={anonymousPro.className}>
			<Header />
			{children}
		</Main>
	);
}

export default DefaultLayout;
