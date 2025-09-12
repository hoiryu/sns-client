type TMethod = 'HEAD' | 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

export interface IRequestInit extends Omit<RequestInit, 'method'> {
	method: TMethod;
}

export interface IResponse<T> {
	success: boolean;
	data: T;
}

export interface IException {
	success: boolean;
	status: number;
	message: string;
}

interface IHttpClient {
	/**
	 * Fetch
	 * T: Response data
	 */
	fetch: <T>(url: string, options: IRequestInit) => Promise<IResponse<T>>;
}

class HttpClient implements IHttpClient {
	private readonly baseURL?: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL.replace(/\/+$/, '');
	}

	async fetch<T>(url: string, options: IRequestInit): Promise<IResponse<T>> {
		const { headers, method, ...rest } = options;

		const response = fetch(`${this.baseURL}${url}`, {
			...rest,
			method: method,
			credentials: 'include',
			headers: {
				...headers,
				'Content-Type': 'application/json',
			},
		});

		response.catch(error => {
			if (!error.message) {
				const { message } = error;
				if (!message)
					throw {
						...error,
						success: false,
						message: 'Unknown Error',
					};
			}
		});

		return (await response).json();
	}
}

const httpClient = new HttpClient(`${process.env.NEXT_PUBLIC_API_SERVER_URL}`);

export default httpClient;
