'use client';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { IPaginate } from '~models/api';
import { IDataPost } from '~models/post';
import { getPosts } from '~src/apis/post';
import { MINUTE } from '~src/consts/query';

interface IPostService {
	/**
	 * 모든 Posts 가져오기
	 */
	// usePosts(): UseSuspenseInfiniteQueryResult<InfiniteData<IPaginate<IDataPost[]>>>;
	// /**
	//  * 특정 Posts 가져오기 (Category)
	//  */
	// getPostsByCategory(category: string): UseSuspenseInfiniteQueryResult<InfiniteData<IDataPost[]>>;
	/**
	 * 특정 Posts 가져오기 (Username)
	 */
	// getPostsByUsername(
	// 	username: string,
	// ): UseSuspenseInfiniteQueryResult<InfiniteData<IPaginate<IDataPost[]>>>;
	// /**
	//  * 특정 Post 가져오기 (Id)
	//  */
	// getPostById(id: string): UseQueryResult<IDataPost>;
}

class PostService implements IPostService {
	constructor() {}

	public usePosts() {
		return useSuspenseInfiniteQuery({
			queryKey: ['posts'],
			queryFn: getPosts,
			getNextPageParam: (data: IPaginate<IDataPost[]>) => {
				return data.next;
			},
			initialPageParam: `/posts?order__createdAt=DESC`,
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
		});
	}

	// public getPostsByUsername(username: string) {
	// 	return useSuspenseInfiniteQuery({
	// 		queryKey: ['posts', username],
	// 		queryFn: getPostsByUsername,
	// 		getNextPageParam: lastPage => {
	// 			if (!lastPage || lastPage.length < LIMIT_POST) return;
	// 			return _.last(lastPage)?.id;
	// 		},
	// 		initialPageParam: '',
	// 		staleTime: 10 * MINUTE,
	// 		gcTime: 11 * MINUTE,
	// 	});
	// }

	// public getPostById(id: string) {
	// 	return useQuery({
	// 		queryKey: ['post', id],
	// 		staleTime: 10 * MINUTE,
	// 		gcTime: 11 * MINUTE,
	// 		queryFn: ({ queryKey }) => getPostById(queryKey[1]),
	// 	});
	// }
}

const postService = new PostService();

export default postService;
