import { zodResolver } from '@hookform/resolvers/zod';
import { useColorScheme } from '@mui/material/styles';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { IThemeSchema, themeSchema } from '~schemas/theme';
import IconDarkMode from '~stories/ui/icons/IconDarkMode';
import IconLightMode from '~stories/ui/icons/IconLightMode';
import ControllerSwitch from '~stories/ui/inputs/switchs/ControllerSwitch';

const SwitchTheme = () => {
	const { mode, setMode } = useColorScheme();
	const { control, getValues, formState } = useForm<IThemeSchema>({
		resolver: zodResolver(themeSchema),
		defaultValues: async () => {
			const theme = window.localStorage.getItem('theme') || 'dark';

			return {
				dark: theme === 'dark',
			};
		},
	});

	if (!mode) return null;

	return (
		<ControllerSwitch
			name='dark'
			control={control}
			formState={formState}
			fieldProps={{
				id: 'darkMode',
				color: 'default',
				size: 'medium',
				icon: <IconLightMode fontSize='inherit' className='text-white' />,
				checkedIcon: <IconDarkMode fontSize='inherit' className='text-white' />,
				classes: {
					root: cn('h-8 py-2.5'),
					switchBase: cn('bg-primary-dark! top-1 p-1'),
					input: cn('left-0 w-full'),
					track: cn('bg-primary-dark/30 opacity-100'),
					checked: cn('translate-x-2.5'),
				},
			}}
			onChange={() => {
				const values = getValues();
				const mode = !!values.dark ? 'dark' : 'light';
				setMode(mode);
				document.cookie = `theme=${mode}; path=/; max-age=36000; samesite=lax`;
			}}
		/>
	);
};

export default SwitchTheme;
