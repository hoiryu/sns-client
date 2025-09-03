import { ReactNode } from 'react';
import Header from '~components/header/Header';
import SidebarNavigation, { IMenu } from '~components/sidebars/SidebarNavigation';
import SidebarSearch from '~components/sidebars/SidebarSearch';
import Container from '~stories/ui/containers/Container';
import IconHome from '~stories/ui/icons/IconHome';
import IconMessage from '~stories/ui/icons/IconMessage';
import IconPerson from '~stories/ui/icons/IconPerson';
import IconSearch from '~stories/ui/icons/IconSearch';
import { cn } from '~utils/cn';

interface IProps {
	readonly children: ReactNode;
	readonly modal: ReactNode;
}

const Layout = ({ children, modal }: IProps) => {
	const menus: IMenu[] = [
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
			href: '/aa/123',
			name: 'profile',
			icon: <IconPerson />,
		},
	];

	return (
		<>
			<Container
				component='main'
				className={cn('grid min-h-[100dvh] w-[100dvw] grid-rows-[auto_1fr]')}
			>
				<Header />
				<Container className={cn('grid grid-cols-[auto_2fr_1fr]')}>
					<SidebarNavigation menus={menus} />
					{children}
					<SidebarSearch />
				</Container>
			</Container>
			{modal}
		</>
	);
};

export default Layout;
