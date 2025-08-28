import z from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_PROFILE_FILE_SIZE_MB } from '~constants/image';

// 단일 이미지 파일 스키마
const fileSchema = z
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

export const signupSchema = z.object({
	email: z.email({
		error: '이메일 형식이 아닙니다.',
	}),
	password: z
		.string()
		.min(8, { message: '최소 8개 이상' })
		.refine(password => /[A-Z]/.test(password), { message: '대문자 필요' })
		.refine(password => /[a-z]/.test(password), { message: '소문자 필요' })
		.refine(password => /[0-9]/.test(password), { message: '숫자 필요' })
		.refine(password => /[^a-zA-Z0-9]/.test(password), {
			message: '특수문자 필요',
		}),
	nickname: z.string().min(2, { message: '최소 2개 이상' }),
	image: z.array(fileSchema).min(1, '최소 1개 필요').max(1, '최대 1개만 가능'),
});

export interface ISignupSchema extends z.infer<typeof signupSchema> {}
