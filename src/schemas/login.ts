import z from 'zod';

export const loginSchema = z.object({
	email: z.email({
		error: '이메일 형식이 아닙니다.',
	}),
	password: z.string(),
	// .min(8, { message: '최소 8개 이상' })
	// .refine(password => /[A-Z]/.test(password), { message: '대문자 필요' })
	// .refine(password => /[a-z]/.test(password), { message: '소문자 필요' })
	// .refine(password => /[0-9]/.test(password), { message: '숫자 필요' })
	// .refine(password => /[^a-zA-Z0-9]/.test(password), {
	// 	message: '특수문자 필요',
	// }),
});

export interface ILoginSchema extends z.infer<typeof loginSchema> {}
