import z from 'zod';

export const createCommentSchema = z.object({
	description: z.string().trim().min(1, '최소 1개 이상'),
});

export interface ICreateCommentSchema extends z.infer<typeof createCommentSchema> {}
