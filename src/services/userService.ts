'use client';
import {
	InfiniteData,
	useInfiniteQuery,
	UseInfiniteQueryResult,
	useQuery,
	UseQueryResult,
} from '@tanstack/react-query';
import _ from 'lodash';
import { useSession } from 'next-auth/react';
import { MINUTE } from '~constants/query';
import { LIMIT_USER } from '~constants/user';
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
	getUsers(): UseInfiniteQueryResult<InfiniteData<IDataUser[]>>;
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
		return useInfiniteQuery({
			queryKey: ['users'],
			queryFn: getUsers,
			getNextPageParam: lastPage => {
				if (!lastPage || lastPage.length < LIMIT_USER) return;
				return _.last(lastPage)?.id;
			},
			initialPageParam: '',
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
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
