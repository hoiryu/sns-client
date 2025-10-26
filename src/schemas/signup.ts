import z from 'zod';
import { schemaProfileImage } from '~schemas/file';

/**
 * Signup 스키마
 */
export const schemaSignup = z.object({
	email: z.email({
		error: '이메일 형식이 아닙니다.',
	}),
	password: z.string(),
	name: z.string().min(2, { message: '최소 2개 이상' }),
	nickname: z.string().min(2, { message: '최소 2개 이상' }),
	image: z.array(schemaProfileImage).min(1, '최소 1개 필요').max(1, '최대 1개 이하'),
});

export interface ISchemaSignup extends z.infer<typeof schemaSignup> {}

// password: z.string(),
// .min(8, { message: '최소 8개 이상' })
// .refine(password => /[A-Z]/.test(password), { message: '대문자 필요' })
// .refine(password => /[a-z]/.test(password), { message: '소문자 필요' })
// .refine(password => /[0-9]/.test(password), { message: '숫자 필요' })
// .refine(password => /[^a-zA-Z0-9]/.test(password), {
// 	message: '특수문자 필요',
// }),
