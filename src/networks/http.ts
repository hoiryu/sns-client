import { IRequestInit } from '~models/api';

class HttpClient {
	private readonly baseURL?: string;

	constructor(baseURL: string) {
		if (!baseURL) throw new Error('NEXT_PUBLIC_API_SERVER_URL 은 필수 입니다.');
		this.baseURL = baseURL;
	}

	async fetch<T>(url: string, options: IRequestInit): Promise<T> {
		const { method, ...rest } = options;

		const fullURL = url.includes(this.baseURL as string) ? url : `${this.baseURL}${url}`;

		const response = await fetch(fullURL, {
			...rest,
			method,
			credentials: 'include',
		});

		const body = await response.json();

		if (!response.ok) throw body;

		return body as T;
	}
}

const httpClient = new HttpClient(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

export default httpClient;
