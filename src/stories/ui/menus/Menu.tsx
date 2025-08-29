import { Menu as MuiMenu } from '@mui/material';
import { TMenuProps } from '~models/menu';

const Menu = ({ ...props }: TMenuProps) => <MuiMenu {...props} />;

export default Menu;
