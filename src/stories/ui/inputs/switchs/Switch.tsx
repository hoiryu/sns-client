import { Switch as MuiSwitch, SwitchProps } from '@mui/material';

interface IProps extends SwitchProps {}
export const sizes: IProps['size'][] = ['small', 'medium'];
export const colors: IProps['color'][] = [
	'primary',
	'secondary',
	'error',
	'info',
	'success',
	'warning',
	'default',
];

const Switch = ({ ...props }: IProps) => <MuiSwitch {...props} />;

export default Switch;
