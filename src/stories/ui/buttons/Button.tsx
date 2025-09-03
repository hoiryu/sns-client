import { Button as MuiButton } from '@mui/material';
import { TButtonProps } from '~models/ui/button';

const Button = ({ variant = 'contained', ...props }: TButtonProps) => (
	<MuiButton variant={variant} {...props} />
);

export default Button;
