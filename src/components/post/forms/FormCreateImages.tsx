'use client';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { postImages } from '~apis/common';
import { ISchemaCreateImages } from '~schemas/common';
import { ISchemaCreatePost } from '~schemas/post';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import Box from '~stories/ui/containers/Box';
import ControllerFileField from '~stories/ui/inputs/files/ControllerFileField';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps {
	formPost: UseFormReturn<ISchemaCreatePost>;
	formImages: UseFormReturn<ISchemaCreateImages>;
}

const FormCreateImages = ({ formPost, formImages }: IProps) => {
	const [loading, setLoading] = useState(false);

	const handlePrev = () => {
		formImages.reset();
		formPost.reset();
	};

	const handleSubmit = async (data: ISchemaCreateImages) => {
		setLoading(true);

		const fd = new FormData();

		data.images.map(async file => fd.append('images', file));

		try {
			const res = await postImages(fd);

			formPost.setValue('images', [...res.files]);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	return (
		<>
			<Box className={cn('col-span-2 flex items-center justify-between')}>
				<ControllerButton
					variant='outlined'
					children='Prev'
					formState={formImages.formState}
					loading={loading}
					onClick={handlePrev}
				/>

				<Typography className={cn('text-center')} children='Create a new post' />

				<ControllerButton
					type='submit'
					variant='outlined'
					children='Next'
					loading={loading}
					formState={formImages.formState}
					onClick={formImages.handleSubmit(handleSubmit)}
				/>
			</Box>

			<Box className={cn('col-span-2')}>
				<ControllerFileField<ISchemaCreateImages>
					fieldProps={{
						className: cn('px-2 py-6'),
						color: 'info',
					}}
					name='images'
					control={formImages.control}
					formState={formImages.formState}
				/>
			</Box>
		</>
	);
};

export default FormCreateImages;
