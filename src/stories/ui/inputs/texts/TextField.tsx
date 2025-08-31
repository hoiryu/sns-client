import { BaseTextFieldProps, TextField as MuiTextField } from '@mui/material';

export interface ITextFieldProps extends BaseTextFieldProps {}
export const variants: ITextFieldProps['variant'][] = ['standard', 'outlined', 'filled'];
export const sizes: ITextFieldProps['size'][] = ['small', 'medium'];
export const colors: ITextFieldProps['color'][] = [
	'primary',
	'secondary',
	'error',
	'info',
	'success',
	'warning',
];

const TextField = ({ error, helperText, ...props }: ITextFieldProps) => (
	<MuiTextField error={error} helperText={!error || helperText} {...props} />
);

export default TextField;
