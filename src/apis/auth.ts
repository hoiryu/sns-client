import httpClient from '~networks/http';

/**
 * Access Token 재발급
 */
export const rotateAccessToken = async <T>(token: string) => {
	console.log('rotateAccessToken', token);
	return httpClient.fetch<T>('/auth/token/access', {
		method: 'POST',
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

/**
 * Refresh Token 재발급
 */
export const rotateRefreshToken = async <T>(token: string) => {
	console.log('rotateRefreshToken', token);
	return httpClient.fetch<T>('/auth/token/refresh', {
		method: 'POST',
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

/**
 * 로그인하기
 */
export const postSignin = async <T>({ email, password }: { email: string; password: string }) =>
	httpClient.fetch<T>('/auth/signin/email', {
		method: 'POST',
		headers: {
			authorization: `Basic ${Buffer.from(`${email}:${password}`, 'utf-8').toString('base64')}`,
		},
	});
