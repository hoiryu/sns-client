import cn from 'classnames';
import { ReactNode } from 'react';
import Header from '~components/common/header/Header';
import NavigationSidebar, { IMenu } from '~components/common/sidebars/NavigationSidebar';
import SearchSidebar from '~components/common/sidebars/SearchSidebar';
import Container from '~stories/ui/containers/Container';
import IconHome from '~stories/ui/icons/IconHome';
import IconMessage from '~stories/ui/icons/IconMessage';
import IconPerson from '~stories/ui/icons/IconPerson';
import IconSearch from '~stories/ui/icons/IconSearch';

interface IProps {
	readonly children: ReactNode;
}

const Layout = ({ children }: IProps) => {
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
				<Container className={cn('grid grid-cols-[auto_2fr_1fr] items-start')}>
					<NavigationSidebar menus={menus} />
					{children}
					<SearchSidebar />
				</Container>
			</Container>
		</>
	);
};

export default Layout;
