import { QueryClient, useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { IPaginate } from '~models/api';
import { IDataPost } from '~models/post';
import { getPosts, postPost } from '~src/apis/post';
import { MINUTE } from '~src/consts/query';

class PostsService {
	constructor() {}

	/**
	 * Post 생성하기
	 */
	public postPost() {
		return useMutation({
			mutationKey: ['post'],
			mutationFn: postPost,
			onMutate: variables => variables,
		});
	}

	/**
	 * Posts 가져오기 (Prefetch)
	 */
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

	/**
	 * Posts 가져오기 (Cursor)
	 */
	public getPosts() {
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

const postsService = new PostsService();

export default postsService;
