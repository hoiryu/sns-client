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
	/**
	 * 특정 User 가져오기 (Email)
	 */
	getUserByEmail(email: string): IDataUser | undefined;
}

class UserService implements IUserService {
	private readonly data: IDataUser[] = [];

	constructor(n: number) {
		const me = {
			id: uniqueId('user-'),
			name: '류승호',
			email: 'comzkow@gmail.com',
			image: 'https://lh3.googleusercontent.com/a/ACg8ocLgEJhtihZj0dLgqSbvFPvhnwcYcLNlAVeIlf7LUN5Zpuv4RDM=s96-c',
		};

		this.data = Array.from({ length: n }, () => ({
			id: uniqueId('user-'),
			name: faker.person.fullName({ sex: undefined }),
			email: faker.internet.exampleEmail({
				lastName: undefined,
				allowSpecialCharacters: undefined,
			}),
			image: faker.image.avatarGitHub(),
		})).concat(me);
	}

	public getUsers(): IDataUser[] | undefined {
		return this.data;
	}

	public getUserByName(name: string): IDataUser | undefined {
		console.log(this.data);
		return this.data.find(user => user.name === name);
	}

	public getUserByEmail(email: string): IDataUser | undefined {
		return this.data.find(user => user.email === email);
	}
}

const userService = new UserService(10);

export default userService;
