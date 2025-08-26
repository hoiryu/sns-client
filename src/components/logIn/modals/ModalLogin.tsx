'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { ILoginSchema, loginSchema } from '~schemas/login';
import Button from '~stories/ui/buttons/Button';
import TextField from '~stories/ui/inputs/texts/TextField';
import Modal from '~stories/ui/modals/Modal';
import Text from '~stories/ui/typographys/Typography';

const ModalLogin = () => {
	const {
		control,
		handleSubmit: zodSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ILoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onSubmit',
	});

	const handleSubmit = async (data: ILoginSchema) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<Modal open size='xsmall' disablePortal disableAutoFocus>
			<form className={cn('flex flex-col gap-7')} onSubmit={zodSubmit(handleSubmit)}>
				<Text variant='h4' children='로그인' />
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label='email'
							type='email'
							error={!!errors.email}
							helperText={errors.email?.message}
							disabled={isSubmitting}
						/>
					)}
				/>
				<Controller
					name='password'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label='password'
							type='password'
							error={!!errors.password}
							helperText={errors.password?.message}
						/>
					)}
				/>
				<Button type='submit' children='login' />
			</form>
		</Modal>
	);
};

export default ModalLogin;
