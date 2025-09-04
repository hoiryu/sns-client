import { IDataUser } from '~models/user';

export interface IDataTrend {
	user: IDataUser;
	title: string;
	posts: number;
}
