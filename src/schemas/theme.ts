import z from 'zod';

export const themeSchema = z.object({
	dark: z.boolean(),
});

export interface IThemeSchema extends z.infer<typeof themeSchema> {}
