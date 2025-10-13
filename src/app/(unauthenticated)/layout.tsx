import { ReactNode } from 'react';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Layout = async ({ children, modal }: IProps) => {
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
