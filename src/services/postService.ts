import { QueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { IPaginate } from '~models/api';
import { IDataPost } from '~models/post';
import { getPosts } from '~src/apis/post';
import { MINUTE } from '~src/consts/query';

class PostService {
	constructor() {}

	public async prefetchPosts(queryClient: QueryClient) {
		return queryClient.prefetchInfiniteQuery({
			queryKey: ['posts'],
			queryFn: getPosts,
			getNextPageParam: (data: IPaginate<IDataPost[]>) => data.next,
			initialPageParam: '/posts?order__createdAt=DESC',
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
		});
	}

	public usePosts() {
		return useSuspenseInfiniteQuery({
			queryKey: ['posts'],
			queryFn: getPosts,
			getNextPageParam: (data: IPaginate<IDataPost[]>) => data.next,
			initialPageParam: `/posts?order__createdAt=DESC`,
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
		});
	}
}

const postService = new PostService();

export default postService;
