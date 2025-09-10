import { useQuery, UseQueryResult } from '@tanstack/react-query';
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
	getPostsByCategory(category: string): UseQueryResult<IDataPost[]>;
	/**
	 * 특정 Posts 가져오기 (Username)
	 */
	getPostsByUsername(username: string): UseQueryResult<IDataPost[]>;

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
		return useQuery({
			queryKey: ['posts', category],
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
			queryFn: getPostsByCategory,
		});
	}

	public getPostsByUsername(username: string) {
		return useQuery({
			queryKey: ['posts', username],
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
			queryFn: getPostsByUsername,
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
