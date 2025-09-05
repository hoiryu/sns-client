import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import ProviderMSW from '~contexts/ProviderMSW';
import ProviderQuery from '~contexts/ProviderQuery';
import ProviderTheme, { TDefaultTheme } from '~src/contexts/ProviderTheme';
import { cn } from '~utils/cn';
import './globals.css';

export const metadata: Metadata = {
	title: 'SNS',
	description: 'SNS 페이지',
};

interface IProps {
	children: ReactNode;
}

export default async function RootLayout({ children }: Readonly<IProps>) {
	const mode = ((await cookies()).get('theme')?.value as TDefaultTheme) || 'dark';

	return (
		<html lang='ko' className={cn(mode)}>
			<body className={cn('font-noto antialiased')}>
				<ProviderMSW>
					<ProviderQuery>
						<AppRouterCacheProvider>
							<ProviderTheme children={children} />
						</AppRouterCacheProvider>
					</ProviderQuery>
				</ProviderMSW>
			</body>
		</html>
	);
}
