import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import ProviderMSW from '~contexts/ProviderMSW';
import ProviderQuery from '~contexts/ProviderQuery';
import ProviderSession from '~contexts/ProviderSession';
import ProviderTheme, { TDefaultTheme } from '~src/contexts/ProviderTheme';
import { cn } from '~utils/cn';
import './globals.css';

if (
	process.env.NEXT_RUNTIME === 'nodejs' &&
	process.env.NODE_ENV !== 'production' &&
	process.env.NEXT_PUBLIC_MSW_ENABLED === 'false'
) {
	const { server } = require('~mocks/node');
	server.listen();
	console.info('========== [MSW] node server started ==========');
}

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
						<ProviderSession>
							<AppRouterCacheProvider>
								<ProviderTheme children={children} />
							</AppRouterCacheProvider>
						</ProviderSession>
					</ProviderQuery>
				</ProviderMSW>
			</body>
		</html>
	);
}
