import { Metadata } from 'next';
import { Suspense } from 'react';
import ContainerSuspensePosts from '~authenticated/home/_components/containers/ContainerSuspensePosts';
import TabsPost from '~authenticated/home/_components/tabs/TabsPost';
import FormCreatePost from '~components/post/forms/FormCreatePost';
import ListItemSkeletonPost from '~components/post/lists/ListItemSkeletonPost';
import Container from '~stories/ui/containers/Container';

export const metadata: Metadata = {
	title: 'SNS Home',
	description: 'Home Description',
};

const Page = async () => {
	return (
		<Container component='section'>
			<TabsPost />
			<FormCreatePost maxRows={2} minRows={2} />
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
