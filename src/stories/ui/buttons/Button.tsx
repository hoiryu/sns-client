import { ButtonProps, Button as MuiButton } from '@mui/material';

export interface IProps extends ButtonProps {}
export const variants: IProps['variant'][] = ['text', 'outlined', 'contained'];
export const sizes: IProps['size'][] = ['small', 'medium', 'large'];
export const colors: IProps['color'][] = [
	'inherit',
	'primary',
	'secondary',
	'success',
	'error',
	'info',
	'warning',
];

const Button = ({ ...props }: IProps) => <MuiButton {...props} />;

export default Button;
