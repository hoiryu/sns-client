import 'next-auth';
import 'next-auth/jwt';
import { IAuthTokens } from '~models/api';
import { IDataUser } from '~models/user';

// Session 타입 확장
declare module 'next-auth' {
	interface Session extends IAuthTokens {
		user: Omit<IDataUser, 'createdAt' | 'updatedAt' | 'followerCount' | 'followingCount'>;
	}

	interface User
		extends Omit<IDataUser, 'createdAt' | 'updatedAt' | 'followerCount' | 'followingCount'>,
			IAuthTokens {}
}

// JWT 타입 확장
declare module 'next-auth/jwt' {
	interface JWT
		extends Omit<IDataUser, 'createdAt' | 'updatedAt' | 'followerCount' | 'followingCount'>,
			IAuthTokens {}
}
