import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getPosts } from '~apis/post';
import ContainerDeciderPosts from '~authenticated/home/_components/containers/ContainerDeciderPosts';
import { IPaginate } from '~models/api';
import { IDataPost } from '~models/post';
import { MINUTE } from '~src/consts/query';

const ContainerSuspensePosts = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: ['posts'],
		queryFn: getPosts,
		getNextPageParam: (data: IPaginate<IDataPost[]>) => {
			return data.next;
		},
		initialPageParam: '/posts?order__createdAt=DESC',
		staleTime: 10 * MINUTE,
		gcTime: 11 * MINUTE,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ContainerDeciderPosts />
		</HydrationBoundary>
	);
};

export default ContainerSuspensePosts;
