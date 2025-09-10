import { http, HttpResponse } from 'msw';
import { userService } from '~mocks/handlers';
import { IDataUser } from '~models/user';
import { IException, IResponse } from '~networks/http';

const API_SERVER_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const handlerUser = [
	// 모든 Users 가져오기
	http.get<never, never, IResponse<IDataUser[]> | IException>(
		`${API_SERVER_URL}/users/all`,
		() => {
			const data = userService.getUsers();

			if (!data)
				return HttpResponse.json<IException>(
					{ success: false, status: 400, message: `No data` },
					{ status: 404 },
				);

			return HttpResponse.json({ data }, { status: 200 });
		},
	),

	// 특정 User 가져오기 (Name)
	http.get<never, { name: string }, IResponse<IDataUser> | IException>(
		`${API_SERVER_URL}/user`,
		async ({ request }) => {
			const { name } = await request.json();
			const data = userService.getUserByName(name);

			if (!data)
				return HttpResponse.json<IException>(
					{ success: false, status: 404, message: `No data` },
					{ status: 404 },
				);

			return HttpResponse.json({ data }, { status: 200 });
		},
	),
];
