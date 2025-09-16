import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import { createUser } from '~apis/user';

export const authOptions: NextAuthConfig = {
	providers: [
		Google({
			authorization: {
				clientId: process.env.AUTH_GOOGLE_ID,
				clientSecret: process.env.AUTH_GOOGLE_SECRET,
				params: { prompt: 'select_account' },
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
		async session({ session, token, user }) {
			// Session Custom
			return session;
		},
		async jwt({ token, account, profile }) {
			if (account && profile) token.id = profile.sub; // 사용자 ID
			return token;
		},
		async signIn({ user, account, profile }) {
			const { name, email, image } = user;
			if (!name || !email || !image) return false;

			await createUser({ name, email, image });

			return true;
		},
		async redirect({ url, baseUrl }) {
			if (url === '/') return baseUrl;
			// 로그인 후 이동 페이지
			return `${baseUrl}/home`;
		},
	},
	session: {
		strategy: 'jwt',
		maxAge: 60 * 10, // 세션 만료 시간(sec)
	},
	pages: {
		signIn: '/signin',
	},
	secret: process.env.JWT_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
