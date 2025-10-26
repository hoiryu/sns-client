import z from 'zod';

/**
 * Signin 스키마
 */
export const schemaSignin = z.object({
	email: z.email({
		error: '이메일 형식이 아닙니다.',
	}),
	password: z.string(),
});

export interface ISchemaSignin extends z.infer<typeof schemaSignin> {}
