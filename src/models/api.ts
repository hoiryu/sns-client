type TMethod = 'HEAD' | 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Fetch 용 Request
 */
export interface IRequestInit extends Omit<RequestInit, 'method'> {
	method: TMethod;
}

/**
 * Mutation 용 Request
 */
export interface IRequest<T> extends Pick<IAuthTokens, 'accessToken'> {
	data: T;
}

/**
 * Response
 */
export interface IResponse<T> {
	success: boolean;
	data: T;
}

/**
 * Exception
 */
export interface IException {
	success: boolean;
	status: number;
	message: string;
}

export interface IAuthTokens {
	accessToken: string;
	refreshToken: string;
}

export interface IJwtPayload {
	sub: number;
	email: string;
	type: 'access' | 'refresh';
	iat: number;
	exp: number;
}

/**
 * Infinite Scroll
 */
export interface IPaginate<T> {
	data: T;
	cursor: {
		after: number | null;
	};
	count: number;
	next: string | null;
}
