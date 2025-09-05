import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MINUTE } from '~constants/query';
import { IDataPost } from '~models/post';
import httpClient from '~networks/http';

interface IPostService {
	getPosts(): UseQueryResult<IDataPost[]>;
}

class PostService implements IPostService {
	constructor() {}

	public getPosts() {
		return useQuery({
			queryKey: ['posts'],
			staleTime: 10 * MINUTE,
			queryFn: () =>
				httpClient
					.fetch<null, IDataPost[]>('/posts', {
						method: 'GET',
					})
					.then(res => res.data),
		});
	}
}

const postService = new PostService();

export default postService;
