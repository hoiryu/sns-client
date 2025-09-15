import { delay, http, HttpResponse } from 'msw';
import { IException, IResponse } from '~models/api';
import { IDataUser } from '~models/user';
import userService from '~services/mocks/userService';

const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const handlerUser = [
	// 모든 Users 가져오기
	http.get<never, never, IResponse<IDataUser[]> | IException>(
		`${API_SERVER_URL}/users/all`,
		async () => {
			const data = userService.getUsers();

			await delay(1000);

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
			const data = userService.getUserByName(username);

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
