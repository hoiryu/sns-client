import { ISwitchProps, ITextFieldProps } from '~models/ui/input';

export const VARIANTS_TEXT_FIELD: ITextFieldProps['variant'][] = ['standard', 'outlined', 'filled'];

export const SIZES_TEXT_FIELD: ITextFieldProps['size'][] = ['small', 'medium'];

export const COLORS_TEXT_FIELD: ITextFieldProps['color'][] = [
	'primary',
	'secondary',
	'error',
	'info',
	'success',
	'warning',
];

export const SIZES_SWITCH: ISwitchProps['size'][] = ['small', 'medium'];

export const COLORS_SWITCH: ISwitchProps['color'][] = [
	'primary',
	'secondary',
	'error',
	'info',
	'success',
	'warning',
	'default',
];
