import cn from 'classnames';
import { ReactNode } from 'react';
import BarSearch from '~/components/search/BarSearch';
import ThemeProvider from '~/themes/ThemeProvider';

interface IProps {
	children: ReactNode;
}

const Layout = ({ children }: IProps) => (
	<ThemeProvider>
		<section className={cn('p-4')}>
			<BarSearch />
			{children}
		</section>
	</ThemeProvider>
);

export default Layout;
