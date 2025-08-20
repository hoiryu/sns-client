'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useColorScheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IThemeSchema, themeSchema } from '~/src/schemas/theme';
import IconDarkMode from '~/stories/ui/icons/IconDarkMode';
import IconLightMode from '~/stories/ui/icons/IconLightMode';
import Switch from '~/stories/ui/inputs/switchs/Switch';

const SwitchTheme = () => {
	const { mode, setMode } = useColorScheme();
	const { control, setValue } = useForm<IThemeSchema>({
		resolver: zodResolver(themeSchema),
		defaultValues: {
			dark: true,
		},
	});

	useEffect(() => {
		const theme = window.localStorage.getItem('theme') as 'light' | 'dark';
		setValue('dark', theme === 'dark');
	}, []);
	if (!mode) return null;

	return (
		<Controller
			name='dark'
			control={control}
			render={({ field: { value, onChange, ...rest } }) => (
				<Switch
					{...rest}
					id='darkMode'
					color='primary'
					checked={value || false}
					icon={<IconLightMode fontSize='small' color='inherit' />}
					checkedIcon={<IconDarkMode fontSize='small' />}
					onChange={e => {
						const mode = !value ? 'dark' : 'light';
						onChange(e.target.checked);
						setMode(mode);
						document.cookie = `theme=${mode}; path=/; max-age=36000; samesite=lax`;
					}}
				/>
			)}
		/>
	);
};

export default SwitchTheme;
