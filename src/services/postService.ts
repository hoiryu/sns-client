'use client';
import {
	InfiniteData,
	useQuery,
	UseQueryResult,
	useSuspenseInfiniteQuery,
	UseSuspenseInfiniteQueryResult,
} from '@tanstack/react-query';
import _ from 'lodash';
import { LIMIT_POST } from '~constants/post';
import { MINUTE } from '~constants/query';
import { IDataPost } from '~models/post';
import { getPostById, getPosts, getPostsByCategory, getPostsByUsername } from '~src/apis/post';

interface IPostService {
	/**
	 * 모든 Posts 가져오기
	 */
	getPosts(): UseQueryResult<IDataPost[]>;
	/**
	 * 특정 Posts 가져오기 (Category)
	 */
	getPostsByCategory(category: string): UseSuspenseInfiniteQueryResult<InfiniteData<IDataPost[]>>;
	/**
	 * 특정 Posts 가져오기 (Username)
	 */
	getPostsByUsername(username: string): UseSuspenseInfiniteQueryResult<InfiniteData<IDataPost[]>>;

	/**
	 * 특정 Post 가져오기 (Id)
	 */
	getPostById(id: string): UseQueryResult<IDataPost>;
}

class PostService implements IPostService {
	constructor() {}

	public getPosts() {
		return useQuery({
			queryKey: ['posts'],
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
			queryFn: getPosts,
		});
	}

	public getPostsByCategory(category: string) {
		return useSuspenseInfiniteQuery({
			queryKey: ['posts', category],
			queryFn: getPostsByCategory,
			getNextPageParam: lastPage => {
				if (!lastPage || lastPage.length < LIMIT_POST) return;
				return _.last(lastPage)?.id;
			},
			initialPageParam: '',
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
		});
	}

	public getPostsByUsername(username: string) {
		return useSuspenseInfiniteQuery({
			queryKey: ['posts', username],
			queryFn: getPostsByUsername,
			getNextPageParam: lastPage => {
				if (!lastPage || lastPage.length < LIMIT_POST) return;
				return _.last(lastPage)?.id;
			},
			initialPageParam: '',
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
		});
	}

	public getPostById(id: string) {
		return useQuery({
			queryKey: ['post', id],
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
			queryFn: getPostById,
		});
	}
}

const postService = new PostService();

export default postService;
