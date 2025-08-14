import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import MswWorker from '~/components/MswWorker';
import HttpClient from '~/networks/http';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
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

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<MswWorker />
				{children}
			</body>
		</html>
	);
}
