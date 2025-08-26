'use client';
import {
	ThemeProvider as MuiThemeProvider,
	ThemeProviderProps,
	createTheme,
} from '@mui/material/styles';
import { MODE_STORAGE_KEY } from '~/constants/theme';

interface IProps extends Omit<ThemeProviderProps, 'theme'> {}

const ProviderTheme = ({ children, ...props }: IProps) => {
	const theme = createTheme({
		colorSchemes: {
			light: {
				palette: {
					primary: {
						main: 'var(--color-primary-light)',
					},
				},
			},
			dark: {
				palette: {
					primary: {
						main: 'var(--color-primary-dark)',
					},
				},
			},
		},
		cssVariables: {
			nativeColor: true,
			colorSchemeSelector: 'class',
		},
		typography: {
			fontFamily: 'var(--font-noto)',
		},
		components: {
			MuiContainer: {
				defaultProps: {
					disableGutters: true,
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						textTransform: 'capitalize',
					},
				},
			},
			MuiTextField: {
				defaultProps: {
					fullWidth: true,
				},
			},
			MuiFormHelperText: {
				styleOverrides: {
					root: {
						position: 'absolute',
						bottom: 0,
						left: 0,
						marginTop: 0,
						translate: '0 110%',
					},
				},
			},
		},
	});

	return (
		<MuiThemeProvider
			{...props}
			theme={theme}
			// defaultMode='dark'
			modeStorageKey={MODE_STORAGE_KEY}
		>
			{children}
		</MuiThemeProvider>
	);
};

export default ProviderTheme;
