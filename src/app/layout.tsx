import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import cn from 'classnames';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import MswWorker from '~/components/common/msw/MswWorker';
import ThemeProvider from '~/contexts/ThemeProvider';
import QueryProvider from '../contexts/QueryProvider';
import './globals.css';

export const metadata: Metadata = {
	title: 'Books',
	description: '테스트용',
};

interface IProps {
	children: ReactNode;
}

export default async function RootLayout({ children }: Readonly<IProps>) {
	const mode = (await cookies()).get('theme')?.value as 'light' | 'dark' | undefined;

	return (
		<html lang='ko' className={mode ?? undefined}>
			<body className={cn('font-noto antialiased')}>
				<QueryProvider>
					<MswWorker />
					<AppRouterCacheProvider>
						<ThemeProvider>{children}</ThemeProvider>
					</AppRouterCacheProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
