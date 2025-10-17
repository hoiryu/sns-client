import { jwtDecode } from 'jwt-decode';

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
export const isTokenExpiringSoon = (token: string, leewaySec = 60) => {
	if (!token) return false;

	const { exp } = jwtDecode(token);
	if (!exp) return false;

	const now = Math.floor(Date.now() / 1000);
	console.log(exp - now);
	return exp - now <= leewaySec;
};
