/**
 * MSW Server
 */
// export async function register() {
// 	if (
// 		process.env.NEXT_RUNTIME !== 'nodejs' ||
// 		process.env.NODE_ENV === 'production' ||
// 		process.env.NEXT_PUBLIC_MSW_ENABLED !== 'false'
// 	)
// 		return;

// 	const { server } = require('./mocks/node');
// 	server.listen();
// 	console.info('[MSW] node server started');
// }

// // 선택: 에러 추적용 export
// export async function onRequestError(
// 	err: unknown,
// 	request: Request,
// 	context: Record<string, unknown>,
// ) {
// 	// 에러 로깅 등
// }
