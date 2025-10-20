import { Metadata } from 'next';
import { Suspense } from 'react';
import ContainerSuspensePosts from '~authenticated/home/_components/containers/ContainerSuspensePosts';
import ListItemSkeletonPost from '~components/post/lists/ListItemSkeletonPost';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

export const metadata: Metadata = {
	title: 'SNS Home',
	description: 'Home Description',
};

const Page = async () => {
	return (
		<Container component='section' className={cn('px-12')}>
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
