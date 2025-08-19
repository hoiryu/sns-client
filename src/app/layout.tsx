import cn from 'classnames';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import MswWorker from '~/components/MswWorker';
import HttpClient from '~/networks/http';
import './globals.css';

export const metadata: Metadata = {
	title: 'Books',
	description: '테스트용',
};

try {
	new HttpClient(process.env.API_SERVER_URL as string);
} catch (error) {
	throw error;
}

interface IProps {
	children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IProps>) {
	return (
		<html lang='ko'>
			<MswWorker />
			<body className={cn('font-noto antialiased')}>{children}</body>
		</html>
	);
}
