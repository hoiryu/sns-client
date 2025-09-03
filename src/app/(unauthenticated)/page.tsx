import { ReactNode } from 'react';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import { cn } from '~utils/cn';
interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Page = ({ children }: IProps) => {
	return (
		<Box className={cn('flex flex-col gap-4')}>
			<Button href='/login' scroll={false} children='로그인' />
			<Button href='/signup' scroll={false} variant='outlined' children='회원가입' />
			{children}
		</Box>
	);
};

export default Page;
