import { Button as MuiButton } from '@mui/material';
import { TButtonProps } from '~models/ui/button';

export const variants: TButtonProps['variant'][] = ['text', 'outlined', 'contained'];
export const sizes: TButtonProps['size'][] = ['small', 'medium', 'large'];
export const colors: TButtonProps['color'][] = [
	'inherit',
	'primary',
	'secondary',
	'success',
	'error',
	'info',
	'warning',
];

const Button = ({ variant = 'contained', ...props }: TButtonProps) => (
	<MuiButton variant={variant} {...props} />
);

export default Button;
