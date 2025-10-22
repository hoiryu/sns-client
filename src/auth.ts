import { jwtDecode } from 'jwt-decode';
import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { postSignin, rotateAccessToken, rotateRefreshToken } from '~apis/auth';
import { getUserByEmail } from '~apis/user';
import { IAuthTokens } from '~models/api';
import { IDataUser } from '~models/user';
import { isTokenExpired, isTokenExpiringSoon } from '~utils/token';

export const authOptions: NextAuthConfig = {
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 7, // 1주일
	},
	providers: [
		Credentials({
			async authorize(credentials) {
				const { email, password } = credentials;

				if (!email || !password) return null;

				const tokens = await postSignin<IAuthTokens>({
					email: email as string,
					password: password as string,
				});

				if (!tokens.accessToken || !tokens.refreshToken) return null;

				const decoded = jwtDecode<Pick<IDataUser, 'id' | 'email' | 'name'>>(
					tokens.accessToken as string,
				);

				const user = await getUserByEmail(decoded.email);

				if (!user) return null;

				return {
					...user,
					...tokens,
				};
			},
		}),
	],
	callbacks: {
		async authorized({ auth, request }) {
			const { pathname } = request.nextUrl;
			// 인증 없이 접근 허용할 페이지
			if (
				pathname.startsWith('/signin') ||
				pathname.startsWith('/signup') ||
				pathname === '/'
			)
				return true;

			return isTokenExpired(auth?.accessToken as string);
		},
		async jwt({ token, user }) {
			if (user)
				token = {
					...user,
					...token,
				};

			// refreshToken 만료 임박시 재발급
			if (isTokenExpiringSoon(token.refreshToken)) {
				const newToken = await rotateRefreshToken<Pick<IAuthTokens, 'refreshToken'>>(
					token.refreshToken,
				);

				token.refreshToken = newToken.refreshToken;
			}

			// accessToken 만료 임박시 재발급
			if (isTokenExpiringSoon(token.accessToken)) {
				const newToken = await rotateAccessToken<Pick<IAuthTokens, 'accessToken'>>(
					token.refreshToken,
				);

				token.accessToken = newToken.accessToken;
			}

			console.log(token);
			return token;
		},
		async session({ session, token }) {
			const { accessToken, refreshToken, ...user } = token;

			return {
				...session,
				accessToken,
				refreshToken,
				user: {
					...session.user,
					...user,
					email: user.email!,
					name: user.name!,
				},
			};
		},
	},
	pages: {
		signIn: '/signin',
		error: '/signin',
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
