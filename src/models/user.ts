export interface IDataUser {
	id: string;
	name: string;
	nickname: string;
	email: string;
	image?: string;
	role: 'ADMIN' | 'USER';
	followerCount: number;
	followingCount: number;
	updatedAt: string;
	createdAt: string;
}

export interface ICreateUser extends Pick<IDataUser, 'name' | 'nickname' | 'email'> {
	password: string;
}
