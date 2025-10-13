import { IRequestInit } from '~models/api';

class HttpClient {
	private readonly baseURL?: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL || 'no';
	}

	async fetch<T>(url: string, options: IRequestInit): Promise<T> {
		const { headers, method, ...rest } = options;

		const fullURL = url.includes(this.baseURL as string) ? url : `${this.baseURL}${url}`;

		const response = await fetch(fullURL, {
			...rest,
			method: method,
			credentials: 'include',
			headers: {
				...headers,
				'Content-Type': 'application/json',
			},
		});

		const body = await response.json();

		return body as T;
	}
}

const httpClient = new HttpClient(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

export default httpClient;
