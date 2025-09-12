import { delay, http, HttpResponse } from 'msw';
import { IDataPost, TCategorysPost } from '~models/post';
import { IException, IResponse } from '~networks/http';
import postService from '~services/mocks/postService';

const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const handlerPost = [
	/**
	 * 모든 Posts 가져오기
	 */
	http.get<never, never, IResponse<IDataPost[]>>(`${API_SERVER_URL}/posts/all`, async () => {
		const data = postService.getPosts();

		await delay(1000);

		return HttpResponse.json({ success: true, data }, { status: 200 });
	}),

	/**
	 * 특정 Posts 가져오기 (Category)
	 */
	http.get<never, never, IResponse<IDataPost[]> | IException>(
		`${API_SERVER_URL}/posts`,
		async ({ request }) => {
			const { searchParams } = new URL(request.url);
			const category = (searchParams.get('category') as TCategorysPost) || 'recommended';
			const data = postService.getPostsByCategory(category);

			await delay(1000);

			if (!data || !data.length)
				return HttpResponse.json<IException>(
					{ success: false, status: 404, message: `Not found` },
					{ status: 404 },
				);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),

	// 특정 Posts 가져오기 (username)
	http.get<{ username: string }, never, IResponse<IDataPost[]> | IException>(
		`${API_SERVER_URL}/posts/:username`,
		async ({ params }) => {
			const { username } = params;
			const data = postService.getPostsByUsername(username);

			await delay(1000);

			if (!data || !data.length)
				return HttpResponse.json<IException>(
					{ success: false, status: 404, message: `Not found` },
					{ status: 404 },
				);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),

	// 특정 Post 가져오기 (username)
	http.get<{ id: string }, never, IResponse<IDataPost> | IException>(
		`${API_SERVER_URL}/post/:id`,
		({ params }) => {
			const { id } = params;
			const data = postService.getPostById(id);

			if (!data)
				return HttpResponse.json<IException>(
					{ success: false, status: 404, message: `Not found` },
					{ status: 404 },
				);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),
];
