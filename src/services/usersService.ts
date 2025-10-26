import { QueryClient, useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { IException, IPaginate } from '~models/api';
import { IDataUser } from '~models/user';
import { ISchemaSignup } from '~schemas/signup';
import { getUsers, postUser } from '~src/apis/user';
import { MINUTE } from '~src/consts/query';

type TUseSessionOptions<T extends boolean> = Parameters<typeof useSession<T>>[0];
type TUseSessionReturn<T extends boolean> = ReturnType<typeof useSession<T>>;

class UsersService {
	constructor() {}

	/**
	 * User 생성하기
	 */
	public postUser() {
		return useMutation<IDataUser, IException, ISchemaSignup>({
			mutationKey: ['user'],
			mutationFn: postUser,
			onMutate: variables => variables,
		});
	}

	/**
	 * 현재 User 가져오기
	 */
	public getMe<T extends boolean>(options?: TUseSessionOptions<T>): TUseSessionReturn<T> {
		return useSession<T>(options);
	}

	/**
	 * Users 가져오기 (Prefetch)
	 */
	public async prefetchUsers(queryClient: QueryClient) {
		return queryClient.prefetchInfiniteQuery({
			queryKey: ['users'],
			queryFn: getUsers,
			getNextPageParam: (data: IPaginate<IDataUser[]>) => data.next,
			initialPageParam: '/users?order__createdAt=DESC&take=5',
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
		});
	}

	/**
	 * Users 가져오기 (Cursor)
	 */
	public getUsers() {
		return useSuspenseInfiniteQuery({
			queryKey: ['users'],
			queryFn: getUsers,
			getNextPageParam: (data: IPaginate<IDataUser[]>) => data.next,
			initialPageParam: `/users?order__createdAt=DESC&take=5`,
			staleTime: 10 * MINUTE,
			gcTime: 11 * MINUTE,
		});
	}
}

const usersService = new UsersService();

export default usersService;
