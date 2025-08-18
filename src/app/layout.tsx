import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import MswWorker from '~/components/MswWorker';
import HttpClient from '~/networks/http';
import './globals.css';

const notoSans = Noto_Sans({
	variable: '--font-noto-nastaliq-urdu',
	subsets: ['latin'],
});

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
			<body className={`${notoSans.variable} antialiased`}>
				<MswWorker />
				{children}
			</body>
		</html>
	);
}
