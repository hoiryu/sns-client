'use client';
import { Tab } from '@mui/material';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactElement, useMemo } from 'react';
import ButtonCreatePost from '~components/post/buttons/ButtonCreatePost';
import userService from '~services/userService';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import IconHome from '~stories/ui/icons/IconHome';
import IconMessage from '~stories/ui/icons/IconMessage';
import IconPerson from '~stories/ui/icons/IconPerson';
import IconSearch from '~stories/ui/icons/IconSearch';
import Tabs from '~stories/ui/tabs/Tabs';
import { cn } from '~utils/cn';

export interface IMenu {
	href: string;
	name: string;
	icon?: ReactElement;
}

const SidebarLeft = () => {
	const segment = useSelectedLayoutSegment();
	const { data } = userService.getMe();

	const menus: IMenu[] = useMemo(
		() => [
			{
				href: '/home',
				name: 'home',
				icon: <IconHome />,
			},
			{
				href: '/search',
				name: 'search',
				icon: <IconSearch />,
			},
			{
				href: '/message',
				name: 'message',
				icon: <IconMessage />,
			},
			{
				href: `/${data?.name}`,
				name: 'profile',
				icon: <IconPerson />,
			},
		],
		[data],
	);

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
				<ButtonCreatePost />
			</Box>
		</Container>
	);
};

export default SidebarLeft;
