type TMethod = 'HEAD' | 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Request 공통
 */
export interface IRequestInit extends Omit<RequestInit, 'method'> {
	method: TMethod;
}

/**
 * Response 공통
 */
export interface IResponse<T> {
	success: boolean;
	data: T;
}

/**
 * Exception 공통
 */
export interface IException {
	success: boolean;
	status: number;
	message: string;
}

/**
 * Infinite Scroll 공통
 */
export interface IParamsInfiniteScroll<T> {
	query: T;
	cursor: string | null;
	limit: number;
}
