import { MenuItem as MuiMenuItem } from '@mui/material';
import { TMenuItemProps } from '~models/ui/menu';

const MenuItem = ({ ...props }: TMenuItemProps) => <MuiMenuItem {...props} />;

export default MenuItem;
