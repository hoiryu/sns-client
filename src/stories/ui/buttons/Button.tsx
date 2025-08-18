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

const Button = ({ variant = 'contained', ...props }: IProps) => (
	<MuiButton variant={variant} {...props} />
);

export default Button;
