import cn from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Page = ({ children }: IProps) => {
	return (
		<Box className={cn('flex flex-col gap-4')}>
			<Link
				href='/login'
				scroll={false}
				children={<Button color='primary' children='로그인' />}
			/>
			<Link
				href='/signup'
				scroll={false}
				children={<Button color='primary' variant='outlined' children='회원가입' />}
			/>
			{children}
		</Box>
	);
};

export default Page;
