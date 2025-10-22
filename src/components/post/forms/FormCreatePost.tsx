'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { UseFormReturn } from 'react-hook-form';
import { ISchemaCreatePost } from '~schemas/post';
import postsService from '~services/postsService';
import usersService from '~services/usersService';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import Box from '~stories/ui/containers/Box';
import ControllerTextareaField from '~stories/ui/inputs/texts/ControllerTextareaField';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps {
	maxRows: number;
	minRows: number;
	formPost: UseFormReturn<ISchemaCreatePost>;
}

const FormCreatePost = ({ maxRows, minRows, formPost }: IProps) => {
	const queryClient = useQueryClient();

	const router = useRouter();

	const { data: session } = usersService.getMe();

	const mutation = postsService.postPost();

	const handlePrev = () => formPost.reset();

	const handleSubmit = (data: ISchemaCreatePost) => {
		if (!session?.accessToken) return;

		mutation.mutate(
			{ data, accessToken: session.accessToken },
			{
				onSuccess: async () => {
					await queryClient.invalidateQueries({ queryKey: ['posts'] });
					router.back();
				},
				onError: console.log,
			},
		);
	};

	return (
		<>
			<Box className={cn('col-span-2 flex items-center justify-between')}>
				<ControllerButton
					variant='outlined'
					children='Prev'
					loading={mutation.isPending}
					formState={formPost.formState}
					onClick={handlePrev}
				/>

				<Typography className={cn('text-center')} children='Create a new post' />

				<ControllerButton
					type='submit'
					variant='outlined'
					children='Next'
					loading={mutation.isPending}
					formState={formPost.formState}
					onClick={formPost.handleSubmit(handleSubmit)}
				/>
			</Box>

			<Box>
				<ControllerTextareaField
					fieldProps={{
						className: cn('rounded-2xl border p-2 outline-none'),
						maxRows,
						minRows,
						'aria-label': 'Create Post',
						placeholder: 'Create Post',
					}}
					name='content'
					control={formPost.control}
					formState={formPost.formState}
				/>
			</Box>
		</>
	);
};

export default FormCreatePost;
