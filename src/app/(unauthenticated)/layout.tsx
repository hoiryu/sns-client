import cn from 'classnames';
import { ReactNode } from 'react';
import Header from '~components/common/header/Header';
import Container from '~stories/ui/containers/Container';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Layout = ({ children, modal }: IProps) => {
	return (
		<Container className={cn('flex h-screen w-screen flex-col items-center justify-center')}>
			<Header />
			{children}
			{modal}
		</Container>
	);
};

export default Layout;
