import { Metadata } from 'next';
import { Suspense } from 'react';
import ContainerSuspensePosts from '~authenticated/search/_components/containers/ContainerSuspensePosts';
import TabsPost from '~authenticated/search/_components/tabs/TabsPost';
import ListItemSkeletonPost from '~components/post/lists/ListItemSkeletonPost';
import FormSearch from '~components/search/forms/FormSearch';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

export const metadata: Metadata = {
	title: 'SNS Search',
	description: 'Search Description',
};

const Page = async () => {
	return (
		<Container component='section' className={cn('relative')}>
			<Container component='article' className={cn('px-4')}>
				<FormSearch />
			</Container>
			<TabsPost />
			<Suspense
				fallback={Array.from({ length: 5 }, (_1, index) => (
					<ListItemSkeletonPost key={index} />
				))}
			>
				<ContainerSuspensePosts />
			</Suspense>
		</Container>
	);
};

export default Page;
