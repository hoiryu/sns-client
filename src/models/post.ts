import { IDataUser } from '~models/user';

export interface IDataPost {
	id: number | string;
	user: IDataUser;
	description: string;
	chat: boolean;
	repost: boolean;
	favorite: boolean;
	imageUrl: string;
	createAt: string | Date;
}
