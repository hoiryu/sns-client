import { faker } from '@faker-js/faker';
import _ from 'lodash';
import { CATEGORYS_POST } from '~constants/post';
import { IParamsInfiniteScroll } from '~models/api';
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
	getPostsByCategory({
		query,
		cursor,
		limit,
	}: IParamsInfiniteScroll<{ category: TCategorysPost }>): IDataPost[] | null;
	/**
	 * 특정 Posts 가져오기 (username)
	 */
	getPostsByUsername({
		query,
		cursor,
		limit,
	}: IParamsInfiniteScroll<{ username: string }>): IDataPost[] | null;
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
			const random = faker.number.int({ min: 0, max: users.length - 1 });
			return {
				id: _.uniqueId('post-'),
				title: faker.lorem.lines(1),
				user: users[random],
				description: faker.lorem.lines(3),
				image: faker.image.urlPicsumPhotos({
					width: 200,
					height: 200,
					grayscale: false,
					blur: 0,
				}),
				// category: CATEGORYS_POST[0],
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

	public getPostsByCategory({
		query: { category },
		cursor,
		limit,
	}: IParamsInfiniteScroll<{ category: TCategorysPost }>) {
		const filtered = _.filter(this.data, { category });
		const startIndex = cursor ? _.findIndex(filtered, { id: cursor }) : 0;

		// 못 찾을 경우
		if (startIndex <= -1) return [];
		const nextIndex = cursor ? startIndex + 1 : startIndex;
		// 많은 경우
		if (filtered.length <= nextIndex) return [];

		return _.slice(filtered, nextIndex, nextIndex + limit) || [];
	}

	public getPostsByUsername({
		query,
		cursor,
		limit,
	}: IParamsInfiniteScroll<{ username: string }>) {
		const { username } = query;
		const filtered = _.filter(this.data, { user: { name: username } });
		const startIndex = cursor ? _.findIndex(filtered, { id: cursor }) : 0;

		// 못 찾을 경우
		if (startIndex <= -1) return [];
		const nextIndex = cursor ? startIndex + 1 : startIndex;
		// 많은 경우
		if (filtered.length <= nextIndex) return [];

		return _.slice(filtered, nextIndex, nextIndex + limit);
	}

	public getPostById(id: string) {
		return this.data.find(post => post.id === id);
	}
}

const postService = new PostService(50);

export default postService;
