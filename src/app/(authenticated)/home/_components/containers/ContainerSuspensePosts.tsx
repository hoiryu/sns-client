import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ContainerPosts from '~authenticated/home/_components/containers/ContainerPosts';
import postService from '~services/postService';

const ContainerSuspensePosts = async () => {
	const queryClient = new QueryClient();

	await postService.prefetchPosts(queryClient);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ContainerPosts />
		</HydrationBoundary>
	);
};

export default ContainerSuspensePosts;
