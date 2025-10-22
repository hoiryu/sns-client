import { ReactNode } from 'react';
import SidebarNavigation from '~app/(authenticated)/_components/sidebars/SidebarLeft';
import SidebarSearch from '~app/(authenticated)/_components/sidebars/SidebarRight';
import Header from '~components/header/Header';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps {
	readonly children: ReactNode;
	readonly modal: ReactNode;
}

const Layout = ({ children, modal }: IProps) => (
	// <ProviderSession>
	<>
		<Container
			component='main'
			className={cn('grid min-h-[100dvh] w-[100dvw] grid-rows-[auto_1fr]')}
		>
			<Header />
			<Container className={cn('grid grid-cols-[auto_2fr_1fr]')}>
				<SidebarNavigation />
				{children}
				<SidebarSearch />
			</Container>
		</Container>
		{modal}
	</>
	// </ProviderSession>
);
export default Layout;
