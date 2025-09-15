import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import { getPostsByUsername } from '~apis/post';
import ContainerPosts from '~authenticated/[username]/_components/containers/ContainerPosts';
import { LIMIT_POST } from '~constants/post';
import { MINUTE } from '~constants/query';
import { IDataPost } from '~models/post';

interface IProps {
	username: string;
}

const ContainerSuspensePosts = async ({ username }: IProps) => {
	const queryClient = new QueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: ['posts', decodeURI(username)],
		queryFn: getPostsByUsername,
		getNextPageParam: (lastPage: IDataPost[]) => {
			if (!lastPage || lastPage.length < LIMIT_POST) return;
			return _.last(lastPage)?.id;
		},
		initialPageParam: '',
		staleTime: 10 * MINUTE,
		gcTime: 11 * MINUTE,
	});

	const dehydratedState = dehydrate(queryClient);
	return (
		<HydrationBoundary state={dehydratedState}>
			<ContainerPosts username={decodeURI(username)} />
		</HydrationBoundary>
	);
};

export default ContainerSuspensePosts;
