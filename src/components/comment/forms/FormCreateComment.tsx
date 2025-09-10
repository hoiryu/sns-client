'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { createCommentSchema, ICreateCommentSchema } from '~schemas/comment';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import Box from '~stories/ui/containers/Box';
import ControllerTextareaField from '~stories/ui/inputs/texts/ControllerTextareaField';
import { cn } from '~utils/cn';

interface IProps {
	maxRows: number;
	minRows: number;
}

const FormCreateComment = ({ maxRows, minRows }: IProps) => {
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<ICreateCommentSchema>({
		resolver: zodResolver(createCommentSchema),
		defaultValues: {
			description: '',
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: ICreateCommentSchema) => {
		alert(JSON.stringify(data, ['description'], 2));
	};

	return (
		<Container
			component='form'
			className={cn('grid grid-cols-1 gap-4 p-4')}
			onSubmit={zodSubmit(handleSubmit)}
		>
			<ControllerTextareaField
				fieldProps={{
					className: cn('rounded-2xl border p-2 outline-none'),
					maxRows,
					minRows,
					'aria-label': 'Create Comment',
					placeholder: 'Create Comment',
				}}
				name='description'
				control={control}
				formState={formState}
			/>
			<Box className={cn('grid h-8 grid-cols-2 gap-4')}>
				<ControllerButton
					type='submit'
					variant='outlined'
					children='create'
					formState={formState}
				/>
			</Box>
		</Container>
	);
};

export default FormCreateComment;
