import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getPostsByCategory } from '~apis/post';
import ContainerPosts from '~authenticated/search/_components/containers/ContainerPosts';
import TabsSearch from '~authenticated/search/_components/tabs/TabsSearch';
import FormSearch from '~components/search/forms/FormSearch';
import { MINUTE } from '~constants/query';
import { TCategorysPost } from '~models/post';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps {
	searchParams: Promise<{ category: TCategorysPost }>;
}

const Page = async ({ searchParams }: IProps) => {
	const { category = 'popular' } = await searchParams;

	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['posts', category],
		queryFn: getPostsByCategory,
		staleTime: 10 * MINUTE,
		gcTime: 11 * MINUTE,
	});

	const dehydratedState = dehydrate(queryClient);

	return (
		<Container component='section' className={cn('relative')}>
			<Container component='article' className={cn('px-4')}>
				<FormSearch />
			</Container>
			<TabsSearch />
			<HydrationBoundary state={dehydratedState}>
				<ContainerPosts category={category} />
			</HydrationBoundary>
		</Container>
	);
};

export default Page;
