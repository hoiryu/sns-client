import { formatDistanceToNowStrict } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * 현재 시간 기준 비교
 */
export const formatTimeAgo = (input: Date | string) => {
	const date = new Date(input);

	return formatDistanceToNowStrict(date, {
		addSuffix: true,
		locale: ko,
	});
};
