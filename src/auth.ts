import { jwtDecode } from 'jwt-decode';
import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { postSignin, rotateAccessToken } from '~apis/auth';
import { getUserByEmail } from '~apis/user';
import { IAuthTokens } from '~models/api';
import { IDataUser } from '~models/user';
import { isTokenExpired, isTokenExpiringSoon } from '~utils/token';

export const authOptions: NextAuthConfig = {
	providers: [
		Credentials({
			async authorize(credentials) {
				const { email, password } = credentials;
				if (!email || !password) return null;

				const tokens = await postSignin<IAuthTokens>({
					email: email as string,
					password: password as string,
				});
				if (!tokens) return null;

				const decoded = jwtDecode<IDataUser>(tokens.accessToken as string);

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
			if (user) {
				token = {
					id: user.id!,
					name: user.name!,
					nickname: user.nickname!,
					role: user.role!,
					email: user.email!,
					accessToken: user.accessToken!,
					refreshToken: user.refreshToken!,
				};
			}

			return token;
		},
		async session({ session, token }) {
			let { accessToken, refreshToken, ...user } = token;

			if (isTokenExpiringSoon(refreshToken)) {
				const newToken =
					await rotateAccessToken<Pick<IAuthTokens, 'refreshToken'>>(refreshToken);
				refreshToken = newToken.refreshToken;
			}

			if (isTokenExpiringSoon(accessToken)) {
				const newToken =
					await rotateAccessToken<Pick<IAuthTokens, 'accessToken'>>(refreshToken);
				accessToken = newToken.accessToken;
			}

			session.user = {
				...session.user,
				id: user.id!,
				name: user.name!,
				nickname: user.nickname!,
				role: user.role!,
				email: user.email!,
			};

			session.accessToken = accessToken;
			session.refreshToken = refreshToken;

			return session;
		},
	},
	pages: {
		signIn: '/signin',
		error: '/signin',
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
