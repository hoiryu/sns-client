import { QueryFunction } from '@tanstack/react-query';
import { LIMIT_POST } from '~constants/post';
import { IDataPost } from '~models/post';
import httpClient from '~networks/http';

/**
 * 모든 Post 가져오기
 */
export const getPosts: QueryFunction<IDataPost[]> = () =>
	httpClient.fetch<IDataPost[]>('/posts/all', {
		method: 'GET',
		next: {
			tags: ['posts'],
		},
	});

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
