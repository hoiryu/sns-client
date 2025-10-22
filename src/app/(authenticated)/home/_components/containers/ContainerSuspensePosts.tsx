import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ContainerPosts from '~authenticated/home/_components/containers/ContainerPosts';
import postsService from '~services/postsService';

const ContainerSuspensePosts = async () => {
	const queryClient = new QueryClient();

	await postsService.prefetchPosts(queryClient);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ContainerPosts />
		</HydrationBoundary>
	);
};

export default ContainerSuspensePosts;
