import z from 'zod';

export const searchSchema = z.object({
	keyword: z
		.string()
		.max(5, '최대 5개 이하')
		.regex(/^[\p{L}\p{N}\s]+$/u, '특수문자 사용 금지'),
});

export interface ISearchSchema extends z.infer<typeof searchSchema> {}
