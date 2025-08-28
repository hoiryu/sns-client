'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { ILoginSchema, loginSchema } from '~schemas/login';
import Button from '~stories/ui/buttons/Button';
import ControllerTextField from '~stories/ui/inputs/texts/ControllerTextField';
import Modal from '~stories/ui/modals/Modal';
import Typography from '~stories/ui/typographys/Typography';

const ModalLogin = () => {
	const router = useRouter();
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<ILoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	});

	const handleSubmit = (data: ILoginSchema) => alert(JSON.stringify(data, null, 2));
	const handleClose = () => router.back();

	return (
		<Modal open size='small' disablePortal disableAutoFocus onClose={handleClose}>
			<form className={cn('flex flex-col gap-7')} onSubmit={zodSubmit(handleSubmit)}>
				<Typography variant='h4' align='center' children='로그인' />
				<ControllerTextField<ILoginSchema>
					fieldProps={{
						type: 'email',
						label: 'email',
					}}
					name='email'
					control={control}
					formState={formState}
				/>
				<ControllerTextField<ILoginSchema>
					fieldProps={{
						type: 'password',
						label: 'password',
					}}
					name='password'
					control={control}
					formState={formState}
				/>
				<Button
					type='submit'
					children='로그인'
					disabled={!!formState.errors['password'] || !!formState.errors['email']}
				/>
			</form>
		</Modal>
	);
};

export default ModalLogin;
