import z from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_PROFILE_FILE_SIZE_MB } from '~constants/image';

// 이미지
export const imageSchema = z
	.instanceof(File)
	.refine(file => file.size <= MAX_PROFILE_FILE_SIZE_MB, {
		message: `파일 크기는 최대 ${MAX_PROFILE_FILE_SIZE_MB}MB까지 허용`,
	})
	.refine(file => {
		console.log(file.type);
		return (
			ACCEPTED_IMAGE_TYPES['image/*'].includes(file.type as any),
			{
				message: `${ACCEPTED_IMAGE_TYPES['image/*'].join(', ')} 확장자만 업로드 가능`,
			}
		);
	});
