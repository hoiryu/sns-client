'use client';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import { useSession } from 'next-auth/react';
import { getUserByName, getUsers } from '~src/apis/user';
import { MINUTE } from '~src/consts/query';
import { LIMIT_USER } from '~src/consts/user';

type TUseSessionOptions<T extends boolean> = Parameters<typeof useSession<T>>[0];
type TUseSessionReturn<T extends boolean> = ReturnType<typeof useSession<T>>;

class UsersService {
	constructor() {}

	/**
	 * 현재 User 가져오기
	 */
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
			queryFn: ({ queryKey }) => getUserByName(queryKey[1]),
		});
	}
}

const usersService = new UsersService();

export default usersService;
