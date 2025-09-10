import { QueryFunction } from '@tanstack/react-query';
import { IDataUser } from '~models/user';
import httpClient from '~networks/http';

/**
 * 모든 유저 가져오기
 */
export const getUsers: QueryFunction<IDataUser[], string[]> = () =>
	httpClient
		.fetch<IDataUser[]>('/users/all', {
			method: 'GET',
			next: {
				tags: ['users'],
			},
		})
		.then(res => res.data);

/**
 * 특정 유져 가져오기 (Name)
 */
export const getUserByName: QueryFunction<IDataUser, string[]> = context =>
	httpClient
		.fetch<IDataUser>('/user/:username', {
			method: 'GET',
			next: {
				tags: ['user', context.queryKey[1]],
			},
		})
		.then(res => res.data);
