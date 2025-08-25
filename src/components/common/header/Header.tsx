'use client';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import SwitchTheme from '~/components/common/header/SwitchTheme';
import Container from '~/src/stories/ui/containers/Container';
import Box from '~/stories/ui/containers/Box';

const Header = () => {
	const pathname = usePathname();
	const navs = useMemo(
		() => [
			{
				href: '/search',
				children: 'search',
			},
			{
				href: '/book/1',
				children: 'book',
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
							'text-amber-200': pathname === nav.href,
						})}
						{...nav}
					/>
				))}

				<SwitchTheme />
			</Box>
		</Container>
	);
};

export default Header;
