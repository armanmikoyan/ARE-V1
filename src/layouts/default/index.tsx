import React from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { Main } from './styles';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
});

function DefaultLayout({ children }) {
	return (
		<Main className={inter.className}>
			<Navbar />
			<Sidebar />
			{children}
		</Main>
	);
}

export default DefaultLayout;
