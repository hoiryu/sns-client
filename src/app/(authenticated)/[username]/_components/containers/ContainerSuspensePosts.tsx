import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import { getPostsByUsername } from '~apis/post';
import ContainerPosts from '~authenticated/[username]/_components/containers/ContainerPosts';
import { IDataPost } from '~models/post';
import { LIMIT_POST } from '~src/consts/post';
import { MINUTE } from '~src/consts/query';

interface IProps {
	username: string;
}

const ContainerSuspensePosts = async ({ username }: IProps) => {
	return null;
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
