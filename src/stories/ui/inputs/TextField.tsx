import { BaseTextFieldProps, TextField as MuiTextField } from '@mui/material';

interface IProps extends BaseTextFieldProps {}
export const variants: IProps['variant'][] = ['standard', 'outlined', 'filled'];
export const sizes: IProps['size'][] = ['small', 'medium'];
export const colors: IProps['color'][] = [
	'primary',
	'secondary',
	'error',
	'info',
	'success',
	'warning',
];

const TextField = ({ error, helperText, ...props }: IProps) => (
	<MuiTextField error={error} helperText={!error || helperText} {...props} />
);

export default TextField;
