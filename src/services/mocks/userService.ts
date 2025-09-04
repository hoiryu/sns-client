import { faker } from '@faker-js/faker';
import _ from 'lodash';
import { IDataUser } from '~models/user';

export interface IUserService {
	getUsers(): IDataUser[];
}

export default class UserService implements IUserService {
	private readonly data: IDataUser[] = [];

	constructor(n: number) {
		this.data = Array.from({ length: n }, () => ({
			id: _.uniqueId('user-'),
			name: faker.person.fullName({ sex: undefined }),
			email: faker.internet.exampleEmail({
				lastName: undefined,
				allowSpecialCharacters: undefined,
			}),
			imageUrl: faker.image.avatarGitHub(),
		}));
	}

	public getUsers(): IDataUser[] {
		return this.data;
	}
}
