import { ButtonProps, Button as MuiButton } from '@mui/material';

export interface IButtonProps extends ButtonProps {}

export const Button = ({ ...props }: IButtonProps) => <MuiButton {...props} />;
