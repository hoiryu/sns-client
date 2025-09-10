import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MINUTE } from '~constants/query';
import { IDataUser } from '~models/user';
import httpClient from '~networks/http';

interface IUserService {
	getMe(): UseQueryResult<IDataUser>;
	getUsers(): UseQueryResult<IDataUser[]>;
}

class UserService implements IUserService {
	constructor() {}

	public getMe() {
		return useQuery({
			queryKey: ['me'],
			staleTime: 10 * MINUTE,
			queryFn: () =>
				httpClient
					.fetch<IDataUser>('/me', {
						method: 'GET',
					})
					.then(res => res.data),
		});
	}

	public getUsers() {
		return useQuery({
			queryKey: ['users'],
			staleTime: 10 * MINUTE,
			queryFn: () =>
				httpClient
					.fetch<IDataUser[]>('/users', {
						method: 'GET',
					})
					.then(res => res.data),
		});
	}

	public getUserByName(name: string) {
		return useQuery({
			queryKey: ['users'],
			staleTime: 10 * MINUTE,
			queryFn: () =>
				httpClient
					.fetch<IDataUser[]>('/user/:username', {
						method: 'GET',
					})
					.then(res => res.data),
		});
	}
}

const userService = new UserService();

export default userService;
