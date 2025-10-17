import { IDataBase } from '~models/base';
import { IDataUser } from '~models/user';
import { CATEGORYS_POST } from '~src/consts/post';

export type TCategorysPost = (typeof CATEGORYS_POST)[number];

export interface IDataPostImage extends IDataBase {
	order: number;
	type: number;
	path: string;
}

export interface IDataPost extends IDataBase {
	author: IDataUser;
	content: string;
	images: IDataPostImage[];
	likeCount: number;
	commentCount: number;
}
