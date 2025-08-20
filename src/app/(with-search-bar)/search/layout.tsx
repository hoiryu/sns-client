import cn from 'classnames';
import { ReactNode } from 'react';
import Main from '~/components/common/containers/Main';
import Header from '~/components/common/header/Header';
import BarSearch from '~/components/search/BarSearch';
interface IProps {
	children: ReactNode;
}

const Layout = ({ children }: IProps) => (
	<Main className={cn('h-[2000px]')}>
		<Header />
		<BarSearch />
		{children}
	</Main>
);

export default Layout;
