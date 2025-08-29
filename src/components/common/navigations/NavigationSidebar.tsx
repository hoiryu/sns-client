'use client';
import { Tab } from '@mui/material';
import cn from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactElement, useMemo } from 'react';
import Button from '~stories/ui/buttons/Button';
import Container from '~stories/ui/containers/Container';
import Tabs from '~stories/ui/tabs/Tabs';

export interface IMenu {
	href: string;
	name: string;
	icon?: ReactElement;
}

interface IProps {
	menus: IMenu[];
}

const NavigationSidebar = ({ menus }: IProps) => {
	const segment = useSelectedLayoutSegment();
	const value = useMemo(() => {
		const index = menus.findIndex(({ href }) => segment && href.includes(segment));
		return index >= 0 ? index : false;
	}, [segment]);

	return (
		<Container component='section' className={cn('flex flex-col gap-5 px-5')}>
			<Tabs orientation='vertical' value={value} aria-label='메인 사이드바'>
				{menus.map(({ href, name, icon }) => (
					<Tab
						key={`${href}-${name}`}
						href={href}
						aria-current={href === segment && 'page'}
						icon={icon}
						label={name}
					/>
				))}
			</Tabs>
			<Button href='/compose/post' children='post' />
		</Container>
	);
};

export default NavigationSidebar;
