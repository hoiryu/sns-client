import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { auth } from '~src/auth';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import { cn } from '~utils/cn';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Page = async ({ children }: Readonly<IProps>) => {
	const session = await auth();

	// 로그인 이후 다시 오면 home 으로 이동
	if (session) redirect('/home');

	return (
		<Box className={cn('flex flex-col gap-4')}>
			<Button component={Link} href='/signin' scroll={false} children='signin' />
			<Button
				component={Link}
				href='/signup'
				scroll={false}
				variant='outlined'
				children='signup'
			/>
			{children}
		</Box>
	);
};

export default Page;
