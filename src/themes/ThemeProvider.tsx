import {
	ThemeProvider as MuiThemeProvider,
	ThemeProviderProps,
	createTheme,
} from '@mui/material/styles';
import colors from 'tailwindcss/colors';
import { formatColor } from '~/utils/colors';

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: formatColor(colors.blue['500']),
			dark: formatColor(colors.blue['700']),
			contrastText: formatColor(colors.white),
		},
	},
	typography: {
		fontFamily: '"Noto Sans KR", sans-serif',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
				},
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

interface IProps extends Omit<ThemeProviderProps, 'theme'> {}

const ThemeProvider = ({ ...props }: IProps) => (
	<MuiThemeProvider {...props} defaultMode='system' theme={defaultTheme} />
);

export default ThemeProvider;
