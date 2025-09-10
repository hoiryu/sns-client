export { auth as middleware } from '~src/auth';

/**
 * 해당 경로에 auth 적용
 */
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
};
