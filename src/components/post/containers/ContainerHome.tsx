'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import ContainerFollowing from '~components/post/containers/ContainerFollowing';
import ContainerRecommended from '~components/post/containers/ContainerRecommended';
import { ACCEPTED_IMAGE_TYPES, MAX_PROFILE_FILE_SIZE_MB } from '~constants/image';
import { createPostSchema, ICreatePostSchema } from '~schemas/post';
import { useStoreTabsMain } from '~src/stores/storeTabsMain';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import ControllerFileField from '~stories/ui/inputs/files/ControllerFileField';
import ControllerTextareaField from '~stories/ui/inputs/texts/ControllerTextareaField';

const ContainerHome = () => {
	const { value } = useStoreTabsMain();
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
	console.log(formState.errors);
	return (
		<>
			<Container
				component='form'
				className={cn('grid grid-cols-1 p-4')}
				onSubmit={zodSubmit(handleSubmit)}
			>
				<ControllerTextareaField
					fieldProps={{
						className: cn('rounded-2xl border p-2 outline-none'),
						maxRows: 4,
						minRows: 4,
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
					<Button type='submit' variant='outlined' children='post' />
				</Box>
			</Container>
			{value === 'recommended' && <ContainerRecommended />}
			{value === 'following' && <ContainerFollowing />}
		</>
	);
};

export default ContainerHome;
