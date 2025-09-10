import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { auth } from '~src/auth';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Layout = async ({ children, modal }: IProps) => {
	const session = await auth();
	if (session?.user) redirect('/home');

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
