import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';
import ProviderTheme from '../src/contexts/ProviderTheme';
import ProviderWithSyncTheme from '../src/contexts/ProviderWithSyncTheme';

const preview: Preview = {
	decorators: [
		withThemeFromJSXProvider({
			themes: {
				light: {
					light: true,
				},
				dark: {
					dark: true,
				},
			},
			defaultTheme: 'dark',
			Provider: ProviderTheme,
		}),
		ProviderWithSyncTheme,
	],
	parameters: {
		backgrounds: {
			options: {
				light: { name: 'Light', value: '#FFF' },
				dark: { name: 'Dark', value: '#000' },
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
	},
	initialGlobals: {
		backgrounds: { value: 'dark' },
	},
};

export default preview;
