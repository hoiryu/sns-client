import { QueryFunction } from '@tanstack/react-query';
import { IPaginate } from '~models/api';
import { IDataPost } from '~models/post';
import httpClient from '~networks/http';
import { LIMIT_POST } from '~src/consts/post';

/**
 * Post 가져오기 (Query String)
 */
export const getPosts: QueryFunction<IPaginate<IDataPost[]>, string[], string> = async query => {
	return httpClient.fetch<IPaginate<IDataPost[]>>(`${query.pageParam}`, {
		method: 'GET',
		// headers: {
		// 	authorization: `Bearer ${session.data?.accessToken}`,
		// },
		next: {
			tags: ['posts'],
		},
	});
};

/**
 * 특정 Posts 가져오기 (Category)
 */
export const getPostsByCategory: QueryFunction<IDataPost[], string[], string> = context =>
	httpClient.fetch<IDataPost[]>(
		`/posts?category=${context.queryKey[1]}&cursor=${context.pageParam}&limit=${LIMIT_POST}`,
		{
			method: 'GET',
			next: {
				tags: ['posts', context.queryKey[1]],
			},
		},
	);

/**
 * 특정 Posts 가져오기 (Username)
 */
export const getPostsByUsername: QueryFunction<IDataPost[], string[], string> = context =>
	httpClient.fetch<IDataPost[]>(
		`/posts/${context.queryKey[1]}?&cursor=${context.pageParam}&limit=${LIMIT_POST}`,
		{
			method: 'GET',
			next: {
				tags: ['posts', context.queryKey[1]],
			},
		},
	);

/**
 * 특정 Post 가져오기 (Id)
 */
export const getPostById = (id: string) =>
	httpClient.fetch<IDataPost>(`/post/${id}`, {
		method: 'GET',
		next: {
			tags: ['post', id],
		},
	});
