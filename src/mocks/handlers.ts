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
	// 모든 유저 가져오기
	http.get<never, never, { data: IDataUser[] }>(`${url}/users`, () => {
		const data = userService.getUsers();
		return HttpResponse.json({ data }, { status: 200 });
	}),

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
