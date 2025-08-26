import { faker } from '@faker-js/faker';
import { IBook } from '~models/book';

abstract class AbstractBookService {
	protected books: IBook[] = [];

	constructor(n: number = 10) {
		this.setBooks(n);
	}
	protected setBooks(n: number = 10) {
		this.books = Array.from({ length: n }, () => {
			const id = faker.number.int({ min: 1, max: n * 100 });
			const title = faker.book.title();

			return {
				id,
				title,
				subTitle: `${title} 의 서브 타이틀`,
				author: faker.book.author(),
				publisher: faker.book.publisher(),
				description: `${id} 테스트 내용입니다.`,
				imageUrl: faker.image.urlPicsumPhotos({
					width: 200,
					height: 200,
					grayscale: false,
					blur: 0,
				}),
			};
		});
	}

	public abstract getBooks(): IBook[];
}

class BookService extends AbstractBookService {
	constructor(n: number) {
		super(n);
	}

	override getBooks(): IBook[] {
		if (this.books.length === 0) this.setBooks(20);

		return this.books;
	}
}

declare global {
	// eslint-disable-next-line no-var
	var __bookService: BookService | undefined;
}

export const bookService =
	globalThis.__bookService ?? (globalThis.__bookService = new BookService(20));

export default bookService;
