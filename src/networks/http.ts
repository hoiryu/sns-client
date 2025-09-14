import { IRequestInit } from '~models/api';

interface IHttpClient {
	/**
	 * Fetch
	 * T: Response data
	 */
	fetch: <T>(url: string, options: IRequestInit) => Promise<T>;
}

class HttpClient implements IHttpClient {
	private readonly baseURL?: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL.replace(/\/+$/, '');
	}

	async fetch<T>(url: string, options: IRequestInit): Promise<T> {
		const { headers, method, ...rest } = options;

		const response = await fetch(`${this.baseURL}${url}`, {
			...rest,
			method: method,
			credentials: 'include',
			headers: {
				...headers,
				'Content-Type': 'application/json',
			},
		});

		const body = await response.json();

		if (!response.ok || !body.success || body.message)
			throw new Error(body.message || 'Unknown Error');

		return body.data as T;
	}
}

const httpClient = new HttpClient(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

export default httpClient;
