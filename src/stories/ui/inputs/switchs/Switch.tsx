import { Switch as MuiSwitch } from '@mui/material';
import { ISwitchProps } from '~models/ui/input';

const Switch = ({ ...props }: ISwitchProps) => <MuiSwitch {...props} />;

export default Switch;
