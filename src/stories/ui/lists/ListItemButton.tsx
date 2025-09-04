import { ListItemButton as MuiListItemButton } from '@mui/material';
import { IListItemButtonProps } from '~models/ui/list';

const ListItemButton = ({ ...props }: IListItemButtonProps) => <MuiListItemButton {...props} />;

export default ListItemButton;
