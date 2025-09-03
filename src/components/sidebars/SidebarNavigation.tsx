'use client';
import { Tab } from '@mui/material';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactElement, useMemo } from 'react';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import Tabs from '~stories/ui/tabs/Tabs';
import { cn } from '~utils/cn';

export interface IMenu {
	href: string;
	name: string;
	icon?: ReactElement;
}

interface IProps {
	menus: IMenu[];
}

const SidebarNavigation = ({ menus }: IProps) => {
	const segment = useSelectedLayoutSegment();
	const value = useMemo(() => {
		if (!segment) return;
		const value = menus.find(({ href }) => href.includes(segment))?.href || false;
		return value;
	}, [segment]);

	return (
		<Container component='section'>
			<Box className={cn('sticky top-0 flex flex-col gap-5 px-5')}>
				<Tabs orientation='vertical' value={value} aria-label='메인 사이드바'>
					{menus.map(({ href, name, icon }) => (
						<Tab
							key={`${href}-${name}`}
							href={href}
							aria-current={href === segment && 'page'}
							icon={icon}
							label={name}
							value={href}
						/>
					))}
				</Tabs>
				<Button href='/compose/post' children='post' />
			</Box>
		</Container>
	);
};

export default SidebarNavigation;
