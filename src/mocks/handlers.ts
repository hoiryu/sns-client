import { http, HttpResponse } from 'msw';
import { IDataPost } from '~models/post';
import { IDataTrend } from '~models/trend';
import { IDataUser } from '~models/user';
import PostService from '~services/mocks/postService';
import TrendService from '~services/mocks/trendService';
import UserService from '~services/mocks/userService';

const url = process.env.NEXT_PUBLIC_API_SERVER_URL;

const userService = new UserService(10);
const trendService = new TrendService(userService, 30);
const postService = new PostService(userService, 30);

export const handlers = [
	// 자기 자신 가져오기
	http.get<never, never, { data: IDataUser | undefined }>(`${url}/me`, async () => {
		const data = userService.getMe();
		if (!data) return HttpResponse.json({ data: undefined }, { status: 404 });
		return HttpResponse.json({ data }, { status: 200 });
	}),

	// 모든 유저 가져오기
	http.get<never, never, { data: IDataUser[] }>(`${url}/users`, () => {
		const data = userService.getUsers();
		return HttpResponse.json({ data }, { status: 200 });
	}),

	// 유저 이름으로 가져오기
	http.get<never, { name: string }, { data: IDataUser | undefined }>(
		`${url}/user`,
		async ({ request }) => {
			const { name } = await request.json();
			const data = userService.getUserByName(name);
			if (!data) return HttpResponse.json({ data: undefined }, { status: 404 });
			return HttpResponse.json({ data }, { status: 200 });
		},
	),

	// 모든 트렌드 가져오기
	http.get<never, never, { data: IDataTrend[] }>(`${url}/trends`, () => {
		const data = trendService.getTrends();
		return HttpResponse.json({ data }, { status: 200 });
	}),

	// 모든 포스트 가져오기
	http.get<never, never, { data: IDataPost[] }>(`${url}/posts`, () => {
		const data = postService.getPosts();
		return HttpResponse.json({ data }, { status: 200 });
	}),
];
