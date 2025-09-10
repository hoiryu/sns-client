import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import ContainerPosts from '~authenticated/home/_components/containers/ContainerPosts';
import TabsPost from '~authenticated/home/_components/tabs/TabsPost';
import FormCreatePost from '~components/post/forms/FormCreatePost';
import { MINUTE } from '~constants/query';
import { TCategorysPost } from '~models/post';
import { getPostsByCategory } from '~src/apis/post';
import Container from '~stories/ui/containers/Container';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home Description',
};

interface IProps {
	searchParams: Promise<{ category: TCategorysPost }>;
}

const Page = async ({ searchParams }: IProps) => {
	const { category = 'recommended' } = await searchParams;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['posts', category],
		queryFn: getPostsByCategory,
		staleTime: 10 * MINUTE,
		gcTime: 11 * MINUTE,
	});

	const dehydratedState = dehydrate(queryClient);

	return (
		<Container component='section'>
			<TabsPost />
			<FormCreatePost maxRows={2} minRows={2} />
			<Container component='article'>
				<HydrationBoundary state={dehydratedState}>
					<ContainerPosts category={category} />
				</HydrationBoundary>
			</Container>
		</Container>
	);
};

export default Page;
