import { faker } from '@faker-js/faker';
import _ from 'lodash';
import { CATEGORYS_POST } from '~constants/post';
import { IDataPost, TCategorysPost } from '~models/post';
import userService from '~services/mocks/userService';

interface IPostService {
	/**
	 * 모든 Posts 가져오기
	 */
	getPosts(): IDataPost[] | undefined;
	/**
	 * 특정 Posts 가져오기 (Category)
	 */
	getPostsByCategory(category: TCategorysPost): IDataPost[] | undefined;
	/**
	 * 특정 Posts 가져오기 (username)
	 */
	getPostsByUsername(username: string): IDataPost[] | undefined;
	/**
	 * 특정 Post 가져오기 (Id)
	 */
	getPostById(id: string): IDataPost | undefined;
}

class PostService implements IPostService {
	private readonly data: IDataPost[] = [];

	constructor(n: number = 10) {
		const users = userService.getUsers();
		if (!users) return;

		this.data = Array.from({ length: n }, () => {
			const index = faker.number.int({ min: 0, max: users.length - 1 });

			return {
				id: _.uniqueId('post-'),
				title: faker.lorem.lines(1),
				user: users[index],
				description: faker.lorem.lines(3),
				image: faker.image.urlPicsumPhotos({
					width: 200,
					height: 200,
					grayscale: false,
					blur: 0,
				}),
				category:
					CATEGORYS_POST[faker.number.int({ min: 0, max: CATEGORYS_POST.length - 1 })],
				favorite: faker.number.int({ min: 0, max: 1 }) === 1 ? true : false,
				repost: faker.number.int({ min: 0, max: 1 }) === 1 ? true : false,
				chat: faker.number.int({ min: 0, max: 1 }) === 1 ? true : false,
				createAt: faker.date.recent({ days: 1 }),
			};
		});
	}

	public getPosts() {
		return this.data;
	}

	public getPostsByCategory(category: TCategorysPost) {
		return this.data.filter(post => post.category === category);
	}

	public getPostsByUsername(username: string) {
		return this.data.filter(post => post.user.name === decodeURI(username));
	}

	public getPostById(id: string) {
		return this.data.find(post => post.id === id);
	}
}

const postService = new PostService(60);

export default postService;
