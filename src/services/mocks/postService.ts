import { faker } from '@faker-js/faker';
import _ from 'lodash';
import { IDataPost } from '~models/post';
import { IUserService } from '~services/mocks/userService';

interface IPostService {
	getPosts(): IDataPost[];
	getPostById(id: string | number): IDataPost | undefined;
}

export default class PostService implements IPostService {
	private readonly data: IDataPost[] = [];

	constructor(userService: IUserService, n: number = 10) {
		const users = userService.getUsers();

		this.data = Array.from({ length: n }, () => {
			const index = faker.number.int({ min: 0, max: users.length - 1 });

			return {
				id: _.uniqueId('post-'),
				title: faker.lorem.lines(1),
				user: users[index],
				description: faker.lorem.lines(3),
				imageUrl: faker.image.urlPicsumPhotos({
					width: 200,
					height: 200,
					grayscale: false,
					blur: 0,
				}),
				favorite: Math.round(faker.number.float()) === 1 ? true : false,
				repost: Math.round(faker.number.float()) === 1 ? true : false,
				chat: Math.round(faker.number.float()) === 1 ? true : false,
				createAt: faker.date.recent({ days: 1 }),
			};
		});
	}

	/**
	 * 모든 Post 가져오기
	 */
	public getPosts() {
		return this.data;
	}

	/**
	 * 특정 Post 가져오기 (id)
	 */
	public getPostById(id: string | number) {
		return this.data.find(post => post.id === id);
	}
}
