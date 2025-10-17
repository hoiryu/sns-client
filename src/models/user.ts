import { IDataBase } from '~models/base';

export interface IDataUser extends IDataBase {
	name: string;
	nickname: string;
	email: string;
	image?: string;
	role: 'ADMIN' | 'USER';
	followerCount: number;
	followingCount: number;
}
