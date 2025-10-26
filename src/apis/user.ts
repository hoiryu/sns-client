import { MutationFunction, QueryFunction } from '@tanstack/react-query';
import { IPaginate } from '~models/api';
import { IDataUser } from '~models/user';
import httpClient from '~networks/http';
import { ISchemaSignup } from '~schemas/signup';

/**
 * User 추가하기
 */
export const postUser: MutationFunction<IDataUser, ISchemaSignup> = async variables => {
	const { image, ...data } = variables;

	const fd = new FormData();

	Object.entries(data).forEach(([key, value]) => fd.append(key, value));

	fd.append('image', image[0]);

	return httpClient.fetch<IDataUser>('/auth/register/email', {
		method: 'POST',
		body: fd,
	});
};

/**
 * Users 가져오기 (Query String)
 */
export const getUsers: QueryFunction<IPaginate<IDataUser[]>, string[], string> = async query => {
	return httpClient.fetch<IPaginate<IDataUser[]>>(`${query.pageParam}`, {
		method: 'GET',
		next: {
			tags: ['users'],
		},
	});
};

/**
 * User 가져오기 (email)
 */
export const getUserByEmail = (email: string) =>
	httpClient.fetch<IDataUser>(`/users/${email}`, {
		method: 'GET',
	});
