import { formatDistanceToNowStrict } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * 현재 시간 기준 비교
 */
export const formatTimeAgo = (input: Date | string) => {
	const date = typeof input === 'string' ? new Date(input) : input;

	return formatDistanceToNowStrict(input, {
		addSuffix: true,
		locale: ko,
	});
};
