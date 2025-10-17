import 'next-auth';
import 'next-auth/jwt';
import { IAuthTokens } from '~models/api';
import { IDataUser } from '~models/user';

// Session 타입 확장
declare module 'next-auth' {
	// authorize()에서 반환하는 user 객체의 shape
	interface User extends IDataUser, IAuthTokens {}

	interface Session extends IAuthTokens {
		user: IDataUser;
	}
}

// JWT 타입 확장
declare module 'next-auth/jwt' {
	interface JWT extends IAuthTokens, Omit<IDataUser, 'image'> {}
}
