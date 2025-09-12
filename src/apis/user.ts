import { QueryFunction } from '@tanstack/react-query';
import { IDataUser } from '~models/user';
import httpClient from '~networks/http';

/**
 * 모든 User 가져오기
 */
export const getUsers: QueryFunction<IDataUser[], string[]> = () =>
	httpClient.fetch<IDataUser[]>('/users/all', {
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
