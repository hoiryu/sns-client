import { faker } from '@faker-js/faker';
import _ from 'lodash';
import { IDataTrend } from '~models/trend';
import { IUserService } from '~services/mocks/userService';

interface ITrendService {
	getTrends(): IDataTrend[];
}

export default class TrendService implements ITrendService {
	private readonly data: IDataTrend[] = [];

	constructor(userService: IUserService, n: number = 10) {
		const users = userService.getUsers();

		this.data = Array.from({ length: n }, () => {
			const index = faker.number.int({ min: 0, max: users.length - 1 });

			return {
				id: _.uniqueId('trend-'),
				title: faker.lorem.lines(1),
				user: users[index],
				posts: faker.number.int({
					min: 0,
					max: 1000,
				}),
			};
		});
	}

	public getTrends(): IDataTrend[] {
		return this.data;
	}
}
