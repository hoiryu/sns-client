import { faker } from '@faker-js/faker';
import { uniqueId } from 'lodash';
import { IDataUser } from '~models/user';

export interface IUserService {
	getUsers(): IDataUser[];
	getUserByName(name: string): IDataUser | undefined;
}

export default class UserService implements IUserService {
	private readonly data: IDataUser[] = [];

	constructor(n: number) {
		const me = {
			id: uniqueId('user-'),
			name: 'hoiryu',
			email: 'hoiryu@test.com',
			imageUrl: faker.image.avatarGitHub(),
		};

		this.data = Array.from({ length: n }, () => ({
			id: uniqueId('user-'),
			name: faker.person.fullName({ sex: undefined }),
			email: faker.internet.exampleEmail({
				lastName: undefined,
				allowSpecialCharacters: undefined,
			}),
			imageUrl: faker.image.avatarGitHub(),
		}));

		this.data.push(me);
	}

	public getMe(): IDataUser | undefined {
		return this.data.find(user => user.name === 'hoiryu');
	}

	public getUsers(): IDataUser[] {
		return this.data;
	}

	public getUserByName(name: string): IDataUser | undefined {
		return this.data.find(user => user.name === name);
	}
}
