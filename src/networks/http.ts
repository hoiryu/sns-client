type TMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELTE';

export interface IResponse<T> {
	data: T;
}

export interface IException {
	success: boolean;
	code: number;
	message: string;
}

interface IRequestInit<T extends RequestInit['body']> extends RequestInit {
	method: TMethod;
	body?: T;
}

interface IHttpClient {
	/**
	 * fetch
	 * T: Request body
	 * U: Response body
	 */
	fetch: <T extends RequestInit['body'], U>(
		url: string,
		options: IRequestInit<T>,
	) => Promise<IResponse<U>>;
}

class HttpClient implements IHttpClient {
	private readonly baseURL?: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	async fetch<T extends RequestInit['body'], U = unknown>(
		url: string,
		options: IRequestInit<T>,
	): Promise<IResponse<U>> {
		const response = fetch(`${this.baseURL}${url}`, options);

		response.catch(error => {
			const { message } = error;
			if (!message || !error.status)
				throw { ...error, status: 500, message: 'Api server error' };
		});

		return (await response).json();
	}
}

const httpClient = new HttpClient(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

export default httpClient;
