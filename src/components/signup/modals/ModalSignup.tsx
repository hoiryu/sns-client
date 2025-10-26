'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { usePreviews } from '~hooks/usePreview';
import { ISchemaSignup, schemaSignup } from '~schemas/signup';
import usersService from '~services/usersService';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import Box from '~stories/ui/containers/Box';
import ControllerFileField from '~stories/ui/inputs/files/ControllerFileField';
import ControllerTextField from '~stories/ui/inputs/texts/ControllerTextField';
import Modal from '~stories/ui/modals/Modal';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ModalSignup = () => {
	const router = useRouter();

	const mutation = usersService.postUser();

	const form = useForm<ISchemaSignup>({
		resolver: zodResolver(schemaSignup),
		defaultValues: {
			email: '',
			password: '',
			name: '',
			nickname: '',
			image: [],
		},
		mode: 'onChange',
	});

	const previews = usePreviews(form.control, 'image');

	const handleSubmit = async (data: ISchemaSignup) => {
		mutation.mutate(data, {
			onError: err => {
				const [key, message] = err.message.split('-');

				form.setError(key as keyof ISchemaSignup, { message });
			},
			onSuccess: async () => {
				await signIn('credentials', {
					email: data.email,
					password: data.password,
					redirect: false,
				});

				router.replace('/home');
			},
		});
	};

	const handleClose = () => router.back();

	return (
		<Modal open size='small' disablePortal onClose={handleClose}>
			<form className={cn('flex flex-col gap-7')} onSubmit={form.handleSubmit(handleSubmit)}>
				<Typography variant='h4' align='center' children='회원가입' />

				<ControllerTextField<ISchemaSignup>
					fieldProps={{
						type: 'email',
						label: 'email',
					}}
					name='email'
					control={form.control}
					formState={form.formState}
				/>

				<ControllerTextField<ISchemaSignup>
					fieldProps={{
						type: 'password',
						label: 'password',
						autoComplete: 'on',
					}}
					name='password'
					control={form.control}
					formState={form.formState}
				/>

				<ControllerTextField<ISchemaSignup>
					fieldProps={{
						label: 'name',
					}}
					name='name'
					control={form.control}
					formState={form.formState}
				/>

				<ControllerTextField<ISchemaSignup>
					fieldProps={{
						label: 'nickname',
					}}
					name='nickname'
					control={form.control}
					formState={form.formState}
				/>

				<ControllerFileField<ISchemaSignup>
					fieldProps={{
						className: cn('p-4'),
						color: 'info',
						multiple: false,
					}}
					name='image'
					control={form.control}
					formState={form.formState}
				/>

				{previews.length > 0 && (
					<Box className={cn('self-center')}>
						<Box className={cn('relative h-14 w-14 justify-self-center')}>
							<Image
								src={previews[0].url}
								alt={`preview-${previews[0].name}`}
								fill
								className={cn('object-cover')}
								sizes='56px'
							/>
						</Box>
					</Box>
				)}
				<ControllerButton type='submit' children='가입하기' formState={form.formState} />
			</form>
		</Modal>
	);
};

export default ModalSignup;
