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
	value: string;
}

const SidebarLeft = () => {
	const segment = useSelectedLayoutSegment();
	const { data: session } = userService.getMe();

	const menus: IMenu[] = useMemo(
		() => [
			{
				href: '/home?category=recommended',
				name: 'home',
				icon: <IconHome />,
				value: 'home',
			},
			{
				href: '/search?category=popular',
				name: 'search',
				icon: <IconSearch />,
				value: 'search',
			},
			{
				href: '/message',
				name: 'message',
				icon: <IconMessage />,
				value: 'message',
			},
			{
				href: session?.user?.name ? `/${session.user.name}` : '',
				name: 'profile',
				icon: <IconPerson />,
				value: 'profile',
			},
		],
		[session],
	);

	const value = useMemo(() => {
		if (!segment || !session) return false;
		return menus.find(({ href }) => href.includes(decodeURI(segment)))?.value || false;
	}, [segment, session]);

	return (
		<Container component='section'>
			<Box className={cn('sticky top-0 flex flex-col gap-5 px-5')}>
				<Tabs orientation='vertical' value={value} aria-label='메인 사이드바'>
					{menus.map(({ href, name, icon, value }) => (
						<Tab
							key={`${name}-${value}`}
							{...(href ? { href } : {})}
							aria-current={href === decodeURI(segment!) && 'page'}
							icon={icon}
							label={name}
							value={value}
						/>
					))}
				</Tabs>
				<ButtonCreatePost />
			</Box>
		</Container>
	);
};

export default SidebarLeft;
