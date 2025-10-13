import Link from 'next/link';
import { ReactNode } from 'react';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import { cn } from '~utils/cn';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Page = ({ children }: Readonly<IProps>) => {
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
