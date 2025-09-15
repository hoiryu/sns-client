import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import { getPostsByCategory } from '~apis/post';
import ContainerDecider from '~authenticated/search/_components/containers/ContainerDeciderPosts';
import { LIMIT_POST } from '~constants/post';
import { MINUTE } from '~constants/query';
import { IDataPost } from '~models/post';

const ContainerSuspensePosts = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: ['posts', 'popular'],
		queryFn: getPostsByCategory,
		getNextPageParam: (lastPage: IDataPost[]) => {
			if (!lastPage || lastPage.length < LIMIT_POST) return;
			return _.last(lastPage)?.id;
		},
		initialPageParam: '',
		staleTime: 10 * MINUTE,
		gcTime: 11 * MINUTE,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ContainerDecider />
		</HydrationBoundary>
	);
};

export default ContainerSuspensePosts;
