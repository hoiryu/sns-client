import z from 'zod';

export const searchSchema = z.object({
	keyword: z.string().min(1, '최소 1개 이상입니다.'),
});

export type TSearchSchema = z.infer<typeof searchSchema>;
