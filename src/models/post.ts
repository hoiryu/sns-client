import { CATEGORYS_POST } from '~constants/post';
import { IDataUser } from '~models/user';

export type TCategorysPost = (typeof CATEGORYS_POST)[number];

export interface IDataPost {
	id: string;
	category: TCategorysPost;
	user: IDataUser;
	description: string;
	chat: string[];
	repost: string[];
	favorite: string[];
	image: string;
	createAt: string | Date;
}
