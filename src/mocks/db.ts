import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';
import _ from 'lodash';
import { CATEGORYS_POST } from '~constants/post';

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
	chat: Boolean,
	repost: Boolean,
	favorite: Boolean,
	image: String,
	createAt: String,
};

export const db = factory({
	users: schemaUser,
	posts: schemaPost,
});

export const seeding = () => {
	db.users.create({
		id: _.uniqueId('user-'),
		email: 'comzkow@gmail.com',
		name: '류승호',
		image: 'https://lh3.googleusercontent.com/a/ACg8ocLgEJhtihZj0dLgqSbvFPvhnwcYcLNlAVeIlf7LUN5Zpuv4RDM=s96-c',
		followers: [],
		followings: [],
	});

	Array.from({ length: 5 }, () =>
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

	Array.from({ length: 50 }, () => {
		const random = faker.number.int({ min: 0, max: users.length - 1 });

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
			favorite: faker.number.int({ min: 0, max: 1 }) === 1 ? true : false,
			repost: faker.number.int({ min: 0, max: 1 }) === 1 ? true : false,
			chat: faker.number.int({ min: 0, max: 1 }) === 1 ? true : false,
			createAt: faker.date.recent({ days: 1 }).toISOString(),
		});
	});
};

seeding();
