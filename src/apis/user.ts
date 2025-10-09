import { QueryFunction } from '@tanstack/react-query';
import { IDataUser } from '~models/user';
import httpClient from '~networks/http';
import { LIMIT_USER } from '~src/consts/user';

/**
 * User 추가하기
 */
export const createUser = async <T>({
	email,
	password,
	name,
	nickname,
	image,
}: Omit<IDataUser, 'id' | 'followers' | 'followings' | 'role'> & { password: string }) =>
	httpClient.fetch<T>('/auth/register/email', {
		method: 'POST',
		body: JSON.stringify({
			name,
			nickname,
			email,
			password,
			image,
		}),
	});

/**
 * 로그인하기
 */
export const postSignin = async <T>({ email, password }: { email: string; password: string }) =>
	httpClient.fetch<T>('/auth/signin/email', {
		method: 'POST',
		headers: {
			authorization: `Basic ${Buffer.from(`${email}:${password}`, 'utf-8').toString('base64')}`,
		},
	});

/**
 * 모든 Users 가져오기
 */
export const getUsers: QueryFunction<IDataUser[], string[], string> = context =>
	httpClient.fetch<IDataUser[]>(`/users/all?&cursor=${context.pageParam}&limit=${LIMIT_USER}`, {
		method: 'GET',
		next: {
			tags: ['users'],
		},
	});

/**
 * 특정 User 가져오기 (Name)
 */
export const getUserByName = (name: string) =>
	httpClient.fetch<IDataUser>(`/user/${name}`, {
		method: 'GET',
		next: {
			tags: ['user', name],
		},
	});

/**
 * User 가져오기 (email)
 */
export const getUserByEmail = (email: string) =>
	httpClient.fetch<IDataUser>(`/users/${email}`, {
		method: 'GET',
	});
