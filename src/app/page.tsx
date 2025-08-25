import cn from 'classnames';
import Main from '~/components/common/containers/Main';
import Header from '~/components/common/header/Header';

const Page = () => {
	return (
		<Main className={cn('h-[2000px] pt-24')}>
			<Header />
		</Main>
	);
};

export default Page;
