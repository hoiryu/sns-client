'use client';
import { useColorScheme } from '@mui/material';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import SwitchTheme from '~components/common/header/SwitchTheme';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';

const Header = () => {
	const pathname = usePathname();
	const color = useColorScheme();
	const navs = useMemo(
		() => [
			{
				href: '/',
				children: 'home',
			},
		],
		[],
	);

	return (
		<Container component='header' className={cn('fixed top-0 z-10 flex justify-center py-4')}>
			<Box
				className={cn(
					'inline-flex items-center justify-center gap-8 rounded-full border px-8 backdrop-blur-3xl',
				)}
				sx={[
					theme =>
						theme.applyStyles('light', {
							backgroundColor: 'var(--color-white)',
						}),
					theme =>
						theme.applyStyles('dark', {
							backgroundColor: 'var(--color-zinc-900/10)',
							borderColor: 'var(--color-neutral-700)',
						}),
				]}
			>
				{navs.map(nav => (
					<Link
						key={nav.href}
						className={cn('py-4 capitalize', {
							'text-blue-700': color.mode === 'dark' && pathname === nav.href,
							'text-blue-400': color.mode === 'light' && pathname === nav.href,
						})}
						{...nav}
					/>
				))}
			</Box>
			<Box className={cn('absolute top-2 right-0')}>
				<SwitchTheme />
			</Box>
		</Container>
	);
};

export default Header;
