import { faker } from '@faker-js/faker';
import { uniqueId } from 'lodash';
import { IDataUser } from '~models/user';

export interface IUserService {
	/**
	 * 모든 Users 가져오기
	 */
	getUsers(): IDataUser[] | undefined;
	/**
	 * 특정 User 가져오기 (Name)
	 */
	getUserByName(name: string): IDataUser | undefined;
}

export default class UserService implements IUserService {
	private readonly data: IDataUser[] = [];

	constructor(n: number) {
		this.data = Array.from({ length: n }, () => ({
			id: uniqueId('user-'),
			name: faker.person.fullName({ sex: undefined }),
			email: faker.internet.exampleEmail({
				lastName: undefined,
				allowSpecialCharacters: undefined,
			}),
			image: faker.image.avatarGitHub(),
		}));
	}

	public getUsers(): IDataUser[] | undefined {
		return this.data;
	}

	public getUserByName(name: string): IDataUser | undefined {
		return this.data.find(user => user.name === name);
	}
}
