import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ACCEPTED_IMAGE_TYPES, MAX_PROFILE_FILE_SIZE_MB } from '~constants/image';
import { createPostSchema, ICreatePostSchema } from '~schemas/post';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import Box from '~stories/ui/containers/Box';
import ControllerFileField from '~stories/ui/inputs/files/ControllerFileField';
import ControllerTextareaField from '~stories/ui/inputs/texts/ControllerTextareaField';
import { cn } from '~utils/cn';

interface IProps {
	maxRows: number;
	minRows: number;
}

const FormCreatePost = ({ maxRows, minRows }: IProps) => {
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<ICreatePostSchema>({
		resolver: zodResolver(createPostSchema),
		defaultValues: {
			description: '',
			image: [],
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: ICreatePostSchema) => {
		alert(JSON.stringify(data, ['description'], 2));
		console.log(data.image);
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
					'aria-label': 'Create Post',
					placeholder: 'Create Post',
				}}
				name='description'
				control={control}
				formState={formState}
			/>
			<Box className={cn('grid h-8 grid-cols-2 gap-4')}>
				<Box>
					<ControllerFileField<ICreatePostSchema>
						fieldProps={{
							className: cn('px-2 py-1'),
							color: 'info',
							accept: ACCEPTED_IMAGE_TYPES,
							maxSize: MAX_PROFILE_FILE_SIZE_MB,
						}}
						name='image'
						control={control}
						formState={formState}
					/>
				</Box>
				<ControllerButton
					type='submit'
					variant='outlined'
					children='post'
					formState={formState}
				/>
			</Box>
		</Container>
	);
};

export default FormCreatePost;
