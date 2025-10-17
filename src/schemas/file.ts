import z from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_POST_FILE_SIZE_MB } from '~src/consts/image';

/**
 * Post Image 스키마
 * @property size: MAX_POST_FILE_SIZE_MB
 * @property type: ACCEPTED_IMAGE_TYPES
 */
export const schemaImage = z
	.instanceof(File)
	.refine(file => file.size <= MAX_POST_FILE_SIZE_MB, {
		message: `파일 크기는 최대 ${MAX_POST_FILE_SIZE_MB / 1000000}MB까지 허용`,
	})
	.refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
		message: `${ACCEPTED_IMAGE_TYPES.map(type => type.split('/')[1]).join(', ')} 확장자만 업로드 가능`,
	});
