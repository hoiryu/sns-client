type TMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELTE';

interface IResponse<T> extends Response {
	data: T;
}

interface IRequestInit<T extends RequestInit['body']> extends RequestInit {
	method: TMethod;
	tags: NextFetchRequestConfig['tags'];
	revalidate?: NextFetchRequestConfig['revalidate'];
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

export default class HttpClient implements IHttpClient {
	static instance: HttpClient;
	private readonly baseURL?: string;

	constructor(baseURL: string) {
		if (HttpClient.instance) return HttpClient.instance;

		this.baseURL = baseURL;
		HttpClient.instance = this;
	}

	async fetch<T extends RequestInit['body'], U = unknown>(
		url: string,
		options: IRequestInit<T>,
	): Promise<IResponse<U>> {
		const {
			method,
			headers = { 'Content-Type': 'application/json' },
			credentials = 'include',
			cache = 'no-store',
			tags,
			revalidate,
		} = options;

		const response = fetch(`${this.baseURL}${url}`, {
			...options,
			credentials,
			headers,
			method,
			cache,
			next: {
				tags,
				revalidate,
			},
		});

		response.then(console.log);

		response.catch(error => {
			const { message } = error;
			if (!message || !error.status)
				throw { ...error, status: 500, message: 'Api server error' };
		});

		return (await response).json();
	}
}
