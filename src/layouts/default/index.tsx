import React from 'react';
import Navbar from '@/components/navbar';
import { Main } from './styles';

function DefaultLayout({ children }) {
	return (
		<Main>
			<Navbar />
			{children}
		</Main>
	);
}

export default DefaultLayout;
