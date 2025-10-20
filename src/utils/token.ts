import { jwtDecode } from 'jwt-decode';
import { IJwtPayload } from '~models/api';

/**
 * Token 만료 검증
 */
export const isTokenExpired = (token: string) => {
	if (!token) return false;

	const { exp } = jwtDecode(token);
	if (!exp) return false;

	const now = Math.floor(Date.now() / 1000);

	return exp > now;
};

/**
 * Token 유효시간 검증
 * @description 남은 시간이 leewaySec 이하면 true
 */
export const isTokenExpiringSoon = (token: string, leewaySec = 120) => {
	if (!token) return false;

	const { exp, type } = jwtDecode<IJwtPayload>(token);

	if (!exp) return false;

	const now = Math.floor(Date.now() / 1000);

	console.info(`${type} 의 남은 시간:`, exp - now);

	return exp - now <= leewaySec;
};
