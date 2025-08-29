import { IconButton as MuiIconButton } from '@mui/material';
import { TButtonIconProps } from '~models/button';

const ButtonIcon = ({ ...props }: TButtonIconProps) => <MuiIconButton {...props} />;

export default ButtonIcon;
