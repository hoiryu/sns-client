import { QueryFunction } from '@tanstack/react-query';
import { LIMIT_USER } from '~constants/user';
import { IDataUser } from '~models/user';
import httpClient from '~networks/http';

/**
 * User 추가하기
 */
export const createUser = ({
	name,
	email,
	image,
}: Omit<IDataUser, 'id' | 'followers' | 'followings'>) =>
	httpClient.fetch<IDataUser>('/user', {
		method: 'POST',
		body: JSON.stringify({
			name,
			email,
			image,
		}),
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
export const getUserByName: QueryFunction<IDataUser, string[]> = context =>
	httpClient.fetch<IDataUser>(`/user/${context.queryKey[1]}`, {
		method: 'GET',
		next: {
			tags: ['user', context.queryKey[1]],
		},
	});
