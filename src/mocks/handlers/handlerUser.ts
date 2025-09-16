import _ from 'lodash';
import { delay, http, HttpResponse } from 'msw';
import { db } from '~mocks/db';
import { IException, IResponse } from '~models/api';
import { IDataUser } from '~models/user';
import { parseNullish } from '~utils/parse';

const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const handlerUser = [
	http.post<
		never,
		Omit<IDataUser, 'id' | 'followers' | 'followings'>,
		IResponse<IDataUser> | IException
	>(`${API_SERVER_URL}/user`, async ({ request }) => {
		const { email, name, image } = await request.json();
		const findUser = db.users.findFirst({
			where: { email: { equals: email } },
		});

		if (findUser)
			return HttpResponse.json<IException>(
				{ success: false, status: 409, message: `User: ${email} already exists` },
				{ status: 409 },
			);

		const data = { id: _.uniqueId('user-'), email, name, image, followers: [], followings: [] };

		db.users.create(data);

		if (!data)
			return HttpResponse.json<IException>(
				{ success: false, status: 400, message: `Bad Request` },
				{ status: 400 },
			);

		await delay(1000);

		return HttpResponse.json({ success: true, data }, { status: 200 });
	}),

	// 모든 Users 가져오기
	http.get<never, never, IResponse<IDataUser[]> | IException>(
		`${API_SERVER_URL}/users/all`,
		async ({ request }) => {
			const { searchParams } = new URL(request.url);
			console.log(request);
			const cursor = parseNullish(searchParams.get('cursor'));
			const limit = Number(searchParams.get('limit'));

			const users = db.users.getAll();
			const startIndex = cursor ? _.findIndex(users, { id: cursor }) : 0;

			// 못 찾을 경우
			if (startIndex <= -1)
				return HttpResponse.json({ success: true, data: [] }, { status: 200 });
			const nextIndex = cursor ? startIndex + 1 : startIndex;

			// 많은 경우
			if (users.length <= nextIndex)
				return HttpResponse.json({ success: true, data: [] }, { status: 200 });

			const data = _.slice(users, nextIndex, nextIndex + limit) as IDataUser[];

			await delay(3000);

			if (!data || !data.length)
				return HttpResponse.json<IException>(
					{ success: false, status: 404, message: `Not found` },
					{ status: 404 },
				);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),

	// 특정 User 가져오기 (Name)
	http.get<{ username: string }, IResponse<IDataUser> | IException>(
		`${API_SERVER_URL}/user/:username`,
		async ({ params }) => {
			const { username } = params;
			console.log(username);
			const data = db.users.findFirst({
				where: { name: { equals: username } },
			});
			console.log(data);
			await delay(1000);

			if (!data)
				return HttpResponse.json<IException>(
					{ success: false, status: 404, message: `Not found` },
					{ status: 404 },
				);

			return HttpResponse.json({ success: true, data }, { status: 200 });
		},
	),
];
