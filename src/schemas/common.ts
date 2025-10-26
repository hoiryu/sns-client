import z from 'zod';
import { schemaPostImage } from '~schemas/file';

/**
 * 이미지 생성 스키마
 */
export const schemaCreateImages = z.object({
	images: z.array(schemaPostImage).min(1, '최소 1개 필요'),
});

export interface ISchemaCreateImages extends z.infer<typeof schemaCreateImages> {}
