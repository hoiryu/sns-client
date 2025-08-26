import cn from 'classnames';
import Link from 'next/link';
import Main from '~/components/common/containers/Main';
import Header from '~/components/common/header/Header';
import Button from '~/stories/ui/buttons/Button';

const Page = () => {
	return (
		<Main className={cn('flex h-screen w-screen items-center justify-center')}>
			<Header />
			<Button component={Link} href='/login' color='primary' children='login' />
		</Main>
	);
};

export default Page;
