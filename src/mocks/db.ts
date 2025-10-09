import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';
import _ from 'lodash';
import { CATEGORYS_POST } from '~src/consts/post';

const schemaUser = {
	id: primaryKey(String),
	name: String,
	email: String,
	image: String,
	followers: Array,
	followings: Array,
};

const schemaPost = {
	id: primaryKey(String),
	user: {
		id: String,
		name: String,
		email: String,
		image: String,
		followers: Array,
		followings: Array,
	},
	category: String,
	description: String,
	chat: Array,
	repost: Array,
	favorite: Array,
	image: String,
	createAt: String,
};

export const db = factory({
	users: schemaUser,
	posts: schemaPost,
});

export const seeding = () => {
	faker.seed(100);

	db.users.create({
		id: 'user-999',
		email: 'comzkow@gmail.com',
		name: '류승호',
		image: 'https://lh3.googleusercontent.com/a/ACg8ocLgEJhtihZj0dLgqSbvFPvhnwcYcLNlAVeIlf7LUN5Zpuv4RDM=s96-c',
		followers: [],
		followings: [],
	});

	Array.from({ length: 20 }, () =>
		db.users.create({
			id: _.uniqueId('user-'),
			name: faker.person.fullName({ sex: undefined }),
			email: faker.internet.exampleEmail({
				lastName: undefined,
				allowSpecialCharacters: undefined,
			}),
			image: faker.image.avatarGitHub(),
			followers: [],
			followings: [],
		}),
	);

	const users = db.users.getAll();

	Array.from({ length: 80 }, () => {
		const random = faker.number.int({ min: 0, max: users.length - 1 });
		const ids = users.map(user => user.id);
		db.posts.create({
			id: _.uniqueId('post-'),
			user: users[random],
			description: faker.lorem.lines(3),
			image: faker.image.urlPicsumPhotos({
				width: 200,
				height: 200,
				grayscale: false,
				blur: 0,
			}),
			category: CATEGORYS_POST[faker.number.int({ min: 0, max: CATEGORYS_POST.length - 1 })],
			favorite: faker.helpers.arrayElements(
				ids,
				faker.number.int({ min: 0, max: ids.length - 1 }),
			),
			repost: faker.helpers.arrayElements(
				ids,
				faker.number.int({ min: 0, max: ids.length - 1 }),
			),
			chat: faker.helpers.arrayElements(
				ids,
				faker.number.int({ min: 0, max: ids.length - 1 }),
			),
			createAt: faker.date.recent({ days: 1 }).toISOString(),
		});
	});
};

seeding();
