import { IDataUser } from '~models/user';

export interface IDataPost {
	id: number | string;
	user: IDataUser;
	description: string;
	imageUrl: string;
}
