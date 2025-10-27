import { IDataBase } from '~models/base';

export interface IDataProfile {
	path: string;
}

export interface IDataUser extends IDataBase {
	name: string;
	nickname: string;
	email: string;
	profile: IDataProfile;
	role: 'ADMIN' | 'USER';
	followerCount: number;
	followingCount: number;
}
