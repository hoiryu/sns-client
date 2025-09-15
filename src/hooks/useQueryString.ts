'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

/**
 * QueryString 훅
 * @function getQueryStrings 전체 QueryStrings 가져오기
 * @function getQueryString 특정 QueryString 가져오기
 * @function setQueryString 특정 QueryString 추가하기
 */
export function useQueryString<T>() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const getQueryString = useCallback((key: string) => searchParams.get(key) as T, [searchParams]);

	const getQueryStrings = useCallback(() => {
		const obj: Record<string, string> = {};
		for (const [key, value] of searchParams.entries()) obj[key] = value;
		return obj;
	}, [searchParams]);

	const setQueryString = useCallback(
		(querys: Record<string, string | null>) => {
			const params = new URLSearchParams(searchParams.toString());
			for (const [k, v] of Object.entries(querys)) {
				if (!v) {
					params.delete(k);
					continue;
				}

				params.set(k, v);
			}

			router.replace(`${pathname}?${params.toString()}`, { scroll: false });
		},
		[pathname, searchParams],
	);

	return { getQueryString, getQueryStrings, setQueryString };
}
