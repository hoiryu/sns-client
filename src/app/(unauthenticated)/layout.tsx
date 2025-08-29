import cn from 'classnames';
import { ReactNode } from 'react';
import Container from '~stories/ui/containers/Container';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Layout = ({ children, modal }: IProps) => {
	return (
		<>
			<Container
				component='main'
				className={cn('flex h-screen w-screen flex-col items-center justify-center')}
			>
				{children}
			</Container>
			{modal}
		</>
	);
};

export default Layout;
