import { http, HttpResponse } from 'msw';
import { IBook } from '~/models/book';
import bookService from '~/services/mocks/BookService';

const url = process.env.NEXT_PUBLIC_API_SERVER_URL;

export const handlers = [
	http.get<never, never, { data: IBook[] }>(`${url}/books`, () => {
		const books = bookService.getBooks();

		return HttpResponse.json({ data: books }, { status: 200 });
	}),
];
