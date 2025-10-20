'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { SwiperSlide } from 'swiper/react';
import FormCreateImages from '~components/post/forms/FormCreateImages';
import FormCreatePost from '~components/post/forms/FormCreatePost';
import { ISchemaCreateImages, schemaCreateImages } from '~schemas/common';
import { ISchemaCreatePost, schemaCreatePost } from '~schemas/post';
import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import Modal from '~stories/ui/modals/Modal';
import Slides from '~stories/ui/slides/Slides';
import { cn } from '~utils/cn';

const ModalCreatePost = () => {
	const router = useRouter();

	const formPost = useForm<ISchemaCreatePost>({
		resolver: zodResolver(schemaCreatePost),
		defaultValues: {
			content: '',
			images: [],
		},
		mode: 'onChange',
	});

	const formImages = useForm<ISchemaCreateImages>({
		resolver: zodResolver(schemaCreateImages),
		defaultValues: {
			images: [],
		},
		mode: 'onChange',
	});

	const images = useWatch({ control: formImages.control, name: 'images' });

	const postImages = useWatch({ control: formPost.control, name: 'images' });

	const previews = useMemo(
		() => images.map(f => ({ url: URL.createObjectURL(f), name: f.name })),
		[images],
	);

	const handleClose = () => router.back();

	useEffect(() => () => previews.forEach(p => URL.revokeObjectURL(p.url)), [previews]);

	return (
		<Modal open size='small' disablePortal onClose={handleClose}>
			<Container
				className={cn('grid gap-4', {
					'grid-cols-1': postImages.length === 0,
					'grid-cols-2': postImages.length > 0,
				})}
			>
				{postImages.length === 0 && (
					<FormCreateImages formPost={formPost} formImages={formImages} />
				)}

				{postImages.length > 0 && (
					<FormCreatePost maxRows={8} minRows={8} formPost={formPost} />
				)}

				{!formImages.formState.errors.images && previews.length > 0 && (
					<Box>
						<Slides
							className={cn('rounded-2xl')}
							children={previews.map((p, i) => (
								<SwiperSlide
									key={`${p.name}-${i}`}
									style={{ height: '300px' }}
									children={
										<Image
											src={p.url}
											alt={p.name || `preview-${i}`}
											fill
											className={cn('object-cover')}
											sizes='200px'
										/>
									}
								/>
							))}
						/>
					</Box>
				)}
			</Container>
		</Modal>
	);
};

export default ModalCreatePost;
