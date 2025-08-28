'use client';
import { CssBaseline } from '@mui/material';
import {
	ThemeProvider as MuiThemeProvider,
	ThemeOptions,
	ThemeProviderProps,
	createTheme,
	useColorScheme,
} from '@mui/material/styles';
import cn from 'classnames';
import { useEffect } from 'react';
import { MODE_STORAGE_KEY } from '~constants/theme';

export type TDefaultTheme = 'dark' | 'light';

type TStoryTheme = Record<TDefaultTheme, boolean>;

interface IProps extends Omit<ThemeProviderProps, 'theme'> {
	theme?: TStoryTheme;
}

export const light: ThemeOptions = {
	palette: {
		primary: {
			main: 'var(--color-primary-light)',
		},
		secondary: {
			main: 'var(--color-secondary-light)',
		},
		error: {
			main: 'var(--color-error-light)',
		},
		warning: {
			main: 'var(--color-warning-light)',
		},
		info: {
			main: 'var(--color-info-light)',
		},
		success: {
			main: 'var(--color-success-light)',
		},
	},
};

export const dark: ThemeOptions = {
	palette: {
		primary: {
			main: 'var(--color-primary-dark)',
		},
		secondary: {
			main: 'var(--color-secondary-dark)',
		},
		error: {
			main: 'var(--color-error-dark)',
		},
		warning: {
			main: 'var(--color-warning-dark)',
		},
		info: {
			main: 'var(--color-info-dark)',
		},
		success: {
			main: 'var(--color-success-dark)',
		},
	},
};

/**
 * Storybook Mode 전환용
 */
function ModeBridge({ theme }: { theme?: TStoryTheme }) {
	const { mode, setMode } = useColorScheme();
	if (!theme) return;

	const keys = Object.keys(theme)[0] as TDefaultTheme;

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
				defaultProps: {
					classes: {
						root: cn('hover:animate-jelly min-w-24 rounded-3xl capitalize'),
					},
				},
			},
			MuiTextField: {
				defaultProps: {
					fullWidth: true,
				},
			},
			MuiFormHelperText: {
				defaultProps: {
					classes: {
						root: cn('absolute bottom-0 left-0 mt-0 translate-x-0 translate-y-[110%]'),
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
