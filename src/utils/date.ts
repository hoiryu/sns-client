import { formatDistanceToNowStrict } from 'date-fns';
import { ko } from 'date-fns/locale/ko';

/**
 * 현재 시간 기준 비교
 */
export const formatTimeAgo = (date: Date | number | string) =>
	formatDistanceToNowStrict(date, {
		addSuffix: true,
		locale: ko,
	});
