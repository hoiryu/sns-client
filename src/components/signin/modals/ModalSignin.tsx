'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ISchemaSignin, schemaSignin } from '~schemas/signin';
import usersService from '~services/usersService';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import ControllerTextField from '~stories/ui/inputs/texts/ControllerTextField';
import Modal from '~stories/ui/modals/Modal';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ModalSignin = () => {
	const router = useRouter();

	const { data: session } = usersService.getMe();

	const {
		control,
		handleSubmit: zodSubmit,
		formState,
		setError,
	} = useForm<ISchemaSignin>({
		resolver: zodResolver(schemaSignin),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: ISchemaSignin) => {
		const res = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});

		if (res.error) {
			setError('password', { message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
			setError('email', { message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
		} else {
			router.replace('/home');
		}
	};

	const handleClose = useCallback(() => router.replace('/'), [router]);

	useEffect(() => {
		// Token 만료 후 제거
		if (!session?.accessToken || !session.refreshToken) signOut({ redirect: false });
	}, [session]);

	return (
		<Modal open size='xsmall' disablePortal onClose={handleClose}>
			<form className={cn('flex flex-col gap-7')} onSubmit={zodSubmit(handleSubmit)}>
				<Typography variant='h4' align='center' children='로그인' />
				<ControllerTextField<ISchemaSignin>
					fieldProps={{
						type: 'email',
						label: 'email',
						required: true,
					}}
					name='email'
					control={control}
					formState={formState}
				/>
				<ControllerTextField<ISchemaSignin>
					fieldProps={{
						type: 'password',
						label: 'password',
						required: true,
						autoComplete: 'on',
					}}
					name='password'
					control={control}
					formState={formState}
				/>

				<ControllerButton type='submit' children='login' formState={formState} />
			</form>
		</Modal>
	);
};

export default ModalSignin;
