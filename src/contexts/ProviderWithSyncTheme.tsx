import { Decorator } from '@storybook/nextjs-vite';
import { useEffect } from 'react';
import { useGlobals } from 'storybook/internal/preview-api';

/**
 * MUI 테마와 Storybook 테마 동기화
 */
const ProviderWithSyncTheme: Decorator = Story => {
	const [globals, updateGlobals] = useGlobals();

	useEffect(() => {
		const theme = globals.theme ?? 'dark';

		if (globals.backgrounds.value !== theme)
			updateGlobals({ backgrounds: { ...globals.backgrounds, value: theme } });
	}, [globals.theme, updateGlobals]);

	return <Story />;
};

export default ProviderWithSyncTheme;
