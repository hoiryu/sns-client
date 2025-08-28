import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import cn from 'classnames';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import ProviderMSW from '~contexts/ProviderMSW';
import ProviderQuery from '~contexts/ProviderQuery';
import ProviderTheme, { TDefaultTheme } from '~src/contexts/ProviderTheme';
import './globals.css';

if (
	process.env.NEXT_RUNTIME === 'nodejs' &&
	process.env.NODE_ENV !== 'production' &&
	process.env.NEXT_PUBLIC_MSW_ENABLED !== 'false'
) {
	const { server } = require('~mocks/http');
	server.listen();
}

export const metadata: Metadata = {
	title: 'SNS',
	description: '메인 페이지',
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
