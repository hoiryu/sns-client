import z from 'zod';

/**
 * Post 생성 스키마
 * @property description: 본문
 * @property images: Post 이미지들
 */
export const schemaCreatePost = z.object({
	content: z.string().trim(),
	images: z.array(z.string()),
});

export interface ISchemaCreatePost extends z.infer<typeof schemaCreatePost> {}

export const updatePostSchema = z.object({
	chat: z.boolean(),
	repost: z.boolean(),
	favorite: z.boolean(),
});

export interface IUpdatePostSchema extends z.infer<typeof updatePostSchema> {}
