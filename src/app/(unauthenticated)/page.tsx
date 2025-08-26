import Link from 'next/link';
import { ReactNode } from 'react';
import Button from '~stories/ui/buttons/Button';

interface IProps {
	children: ReactNode;
	modal: ReactNode;
}

const Page = ({ children }: IProps) => {
	return (
		<div>
			<Link
				href='/login'
				scroll={false}
				children={<Button color='primary' children='login' />}
			/>
			{children}
		</div>
	);
};

export default Page;
