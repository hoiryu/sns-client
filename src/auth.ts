import { jwtDecode } from 'jwt-decode';
import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { getUserByEmail, postSignin } from '~apis/user';
import { IAuthTokens } from '~models/api';
import { IDataUser } from '~models/user';

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
		authorized: async ({ auth, request }) => {
			const { pathname } = request.nextUrl;

			// 인증 없이 접근 허용할 페이지
			if (
				pathname.startsWith('/signin') ||
				pathname.startsWith('/signup') ||
				pathname === '/'
			)
				return true;

			return !!auth;
		},
		async jwt({ token, user, trigger, session }) {
			if (user && user) {
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
			const { accessToken, refreshToken, ...user } = token;
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
	logger: {
		error: () => {},
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
