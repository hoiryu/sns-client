import z from 'zod';

export const searchSchema = z.object({
	keyword: z
		.string()
		.min(1, '최소 1개 이상')
		.regex(/^[\p{L}\p{N}\s]+$/u, '특수문자 사용 금지'),
});

export interface ISearchSchema extends z.infer<typeof searchSchema> {}
