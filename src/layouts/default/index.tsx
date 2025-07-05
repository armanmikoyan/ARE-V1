import React from 'react';
import Navbar from '@/components/navbar';
import { Main } from './styles';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
});

function DefaultLayout({ children }) {
	return (
		<Main className={inter.className}>
			<Navbar />
			{children}
		</Main>
	);
}

export default DefaultLayout;
