'use client';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { MINUTE } from '~constants/query';
import { IDataUser } from '~models/user';
import { getUserByName, getUsers } from '~src/apis/user';

type TUseSessionOptions<T extends boolean> = Parameters<typeof useSession<T>>[0];
type TUseSessionReturn<T extends boolean> = ReturnType<typeof useSession<T>>;

interface IUserService {
	/**
	 * 현재 User 가져오기
	 */
	getMe<T extends boolean>(options?: TUseSessionOptions<T>): TUseSessionReturn<T>;
	/**
	 * 모든 User 가져오기
	 */
	getUsers(): UseQueryResult<IDataUser[]>;
	/**
	 * 특정 User 가져오기 (Name)
	 */
	getUserByName(name: string): UseQueryResult<IDataUser>;
}

class UserService implements IUserService {
	constructor() {}

	public getMe<T extends boolean>(options?: TUseSessionOptions<T>): TUseSessionReturn<T> {
		return useSession<T>(options);
	}

	public getUsers() {
		return useQuery({
			queryKey: ['users'],
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
			queryFn: getUsers,
		});
	}

	public getUserByName(name: string) {
		return useQuery({
			queryKey: ['user', name],
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
			queryFn: getUserByName,
		});
	}
}

const userService = new UserService();

export default userService;
