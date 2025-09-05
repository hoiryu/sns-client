'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

/**
 * QueryString 훅
 * @function getQueryString QueryString 가져오기
 * @function setQueryString QueryString 추가하기
 */
export function useQueryString() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const getQueryString = useCallback(
		(key?: string) => {
			if (!key) {
				const obj: Record<string, string> = {};
				for (const [key, value] of searchParams.entries()) obj[key] = value;
				return obj;
			}
			return searchParams.get(key);
		},
		[searchParams],
	);

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

	return { getQueryString, setQueryString };
}
