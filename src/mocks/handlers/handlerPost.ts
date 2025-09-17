import _ from 'lodash';
import { delay, http, HttpResponse } from 'msw';
import { db } from '~mocks/db';
import { IException, IResponse } from '~models/api';
import { IDataPost, TCategorysPost } from '~models/post';
import { parseNullish } from '~utils/parse';

const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const handlerPost = [
	/**
	 * 모든 Posts 가져오기
	 */
	http.get<never, never, IResponse<IDataPost[]>>(`${API_SERVER_URL}/posts/all`, async () => {
		const data = db.posts.getAll() as IDataPost[];

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
			const cursor = parseNullish(searchParams.get('cursor'));
			const limit = Number(searchParams.get('limit'));

			const filtered = db.posts.findMany({
				where: {
					category: {
						equals: category,
					},
				},
			});

			const startIndex = cursor ? _.findIndex(filtered, { id: cursor }) : 0;

			// 못 찾을 경우
			if (startIndex <= -1)
				return HttpResponse.json({ success: true, data: [] }, { status: 200 });
			const nextIndex = cursor ? startIndex + 1 : startIndex;

			// 많은 경우
			if (filtered.length <= nextIndex)
				return HttpResponse.json({ success: true, data: [] }, { status: 200 });

			const data = _.slice(filtered, nextIndex, nextIndex + limit) as IDataPost[];

			await delay(1000);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),

	// 특정 Posts 가져오기 (username)
	http.get<{ username: string }, never, IResponse<IDataPost[]> | IException>(
		`${API_SERVER_URL}/posts/:username`,
		async ({ request, params }) => {
			const { searchParams } = new URL(request.url);
			const cursor = parseNullish(searchParams.get('cursor'));
			const limit = Number(searchParams.get('limit'));
			const { username } = params;

			const filtered = db.posts.findMany({
				where: {
					user: {
						name: {
							equals: decodeURI(username),
						},
					},
				},
			}) as IDataPost[];

			const startIndex = cursor ? _.findIndex(filtered, { id: cursor }) : 0;

			// 못 찾을 경우
			if (startIndex <= -1)
				return HttpResponse.json({ success: true, data: [] }, { status: 200 });
			const nextIndex = cursor ? startIndex + 1 : startIndex;

			// 많은 경우
			if (filtered.length <= nextIndex)
				return HttpResponse.json({ success: true, data: [] }, { status: 200 });

			const data = _.slice(filtered, nextIndex, nextIndex + limit) as IDataPost[];

			await delay(1000);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),

	// 특정 Post 가져오기 (id)
	http.get<{ id: string }, never, IResponse<IDataPost> | IException>(
		`${API_SERVER_URL}/post/:id`,
		({ params }) => {
			const { id } = params;
			const data = db.posts.findFirst({
				where: {
					id: {
						equals: id,
					},
				},
			}) as IDataPost;

			if (!data)
				return HttpResponse.json<IException>(
					{ success: false, status: 404, message: `Not found` },
					{ status: 404 },
				);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),
];
