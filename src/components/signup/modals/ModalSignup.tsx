'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { createUser } from '~apis/user';
import { IAuthTokens } from '~models/api';
import { ISignupSchema, signupSchema } from '~schemas/signup';
import { ACCEPTED_IMAGE_TYPES, MAX_PROFILE_FILE_SIZE_MB } from '~src/consts/image';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import ControllerFileField from '~stories/ui/inputs/files/ControllerFileField';
import ControllerTextField from '~stories/ui/inputs/texts/ControllerTextField';
import Modal from '~stories/ui/modals/Modal';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ModalSignup = () => {
	const router = useRouter();
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<ISignupSchema>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			email: '',
			password: '',
			name: '',
			nickname: '',
			image: [],
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: ISignupSchema) => {
		const { name, nickname, email, password } = data;
		try {
			const tokens = await createUser<IAuthTokens>({
				email,
				password,
				name,
				nickname,
				image: '',
			});

			await signIn('credentials', {
				accessToken: tokens.accessToken,
				refreshToken: tokens.refreshToken,
				redirect: false,
				redirectTo: '/home',
			});
		} catch (e) {
			console.log(e);
		}
	};

	const handleClose = () => router.back();

	return (
		<Modal open size='small' disablePortal onClose={handleClose}>
			<form className={cn('flex flex-col gap-7')} onSubmit={zodSubmit(handleSubmit)}>
				<Typography variant='h4' align='center' children='회원가입' />
				<ControllerTextField<ISignupSchema>
					fieldProps={{
						type: 'email',
						label: 'email',
					}}
					name='email'
					control={control}
					formState={formState}
				/>
				<ControllerTextField<ISignupSchema>
					fieldProps={{
						type: 'password',
						label: 'password',
						autoComplete: 'on',
					}}
					name='password'
					control={control}
					formState={formState}
				/>
				<ControllerTextField<ISignupSchema>
					fieldProps={{
						label: 'name',
					}}
					name='name'
					control={control}
					formState={formState}
				/>
				<ControllerTextField<ISignupSchema>
					fieldProps={{
						label: 'nickname',
					}}
					name='nickname'
					control={control}
					formState={formState}
				/>
				<ControllerFileField<ISignupSchema>
					fieldProps={{
						className: cn('p-4'),
						color: 'info',
						accept: ACCEPTED_IMAGE_TYPES,
						maxSize: MAX_PROFILE_FILE_SIZE_MB,
					}}
					name='image'
					control={control}
					formState={formState}
				/>

				<ControllerButton type='submit' children='가입하기' formState={formState} />
			</form>
		</Modal>
	);
};

export default ModalSignup;
