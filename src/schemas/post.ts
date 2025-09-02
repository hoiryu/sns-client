import z from 'zod';
import { imageSchema } from '~schemas/file';

export const createPostSchema = z.object({
	description: z.string().trim(),
	image: z.array(imageSchema).min(1, '최소 1개 필요').max(1, '최대 1개만 가능'),
});

export interface ICreatePostSchema extends z.infer<typeof createPostSchema> {}
