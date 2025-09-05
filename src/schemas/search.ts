import z from 'zod';

export const searchSchema = z.object({
	keyword: z
		.string()
		.max(10, '최대 10개 이하')
		.regex(/^[\p{L}\p{N}\s]*$/u, '특수문자 사용 금지'), // 공백, 띄어쓰기, 스페이스 허용
});

export interface ISearchSchema extends z.infer<typeof searchSchema> {}
