'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { ILoginSchema, loginSchema } from '~schemas/login';
import Button from '~stories/ui/buttons/Button';
import ControllerButton from '~stories/ui/buttons/ControllerButton';
import ControllerTextField from '~stories/ui/inputs/texts/ControllerTextField';
import Modal from '~stories/ui/modals/Modal';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ModalSignin = () => {
	const router = useRouter();
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
		setError,
	} = useForm<ILoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: ILoginSchema) => {
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

		// if (res?.ok) {
		// 	// 로그인 성공 → 원하는 경로로 이동
		// 	router.replace('/home');
		// } else {
		// 	// 로그인 실패 → 에러 메시지 처리
		// 	console.error(res?.error);
		// 	alert('이메일 또는 비밀번호가 올바르지 않습니다.');
		// }
	};

	const handleSignin = useCallback(() => signIn('google'), [signIn]);

	const handleClose = useCallback(() => router.replace('/'), [router]);

	return (
		<Modal open size='small' disablePortal onClose={handleClose}>
			<form className={cn('flex flex-col gap-7')} onSubmit={zodSubmit(handleSubmit)}>
				<Typography variant='h4' align='center' children='로그인' />
				<ControllerTextField<ILoginSchema>
					fieldProps={{
						type: 'email',
						label: 'email',
						required: true,
					}}
					name='email'
					control={control}
					formState={formState}
				/>
				<ControllerTextField<ILoginSchema>
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
				<Button children='Google Login' onClick={handleSignin} />
			</form>
		</Modal>
	);
};

export default ModalSignin;
