'use client';
import { CssBaseline } from '@mui/material';
import {
	ThemeProvider as MuiThemeProvider,
	ThemeOptions,
	ThemeProviderProps,
	createTheme,
	useColorScheme,
} from '@mui/material/styles';
import { useEffect } from 'react';
import { MODE_STORAGE_KEY } from '~constants/theme';

type TStoryTheme = Record<'dark' | 'light', boolean>;

interface IProps extends Omit<ThemeProviderProps, 'theme'> {
	theme?: TStoryTheme;
}

export const light: ThemeOptions = {
	palette: {
		primary: {
			main: 'var(--color-primary-light)',
		},
	},
};

export const dark: ThemeOptions = {
	palette: {
		primary: {
			main: 'var(--color-primary-dark)',
		},
	},
};

/**
 * Storybook 용
 */
function ModeBridge({ theme }: { theme?: TStoryTheme }) {
	const { mode, setMode } = useColorScheme();
	if (!theme) return;

	const keys = Object.keys(theme)[0] as 'dark' | 'light';

	useEffect(() => {
		if (!keys || !mode || keys === mode) return;
		setMode(keys);
	}, [keys, mode, setMode]);

	return null;
}

const ProviderTheme = ({ theme, children, ...props }: IProps) => {
	const defaultTheme = createTheme({
		cssVariables: {
			nativeColor: true,
			colorSchemeSelector: 'class',
		},
		colorSchemes: {
			light,
			dark,
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
		<MuiThemeProvider {...props} theme={defaultTheme} modeStorageKey={MODE_STORAGE_KEY}>
			<ModeBridge theme={theme} />
			<CssBaseline enableColorScheme />
			{children}
		</MuiThemeProvider>
	);
};

export default ProviderTheme;
