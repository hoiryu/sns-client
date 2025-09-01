import { ListItemButtonProps, ListItemButton as MuiListItemButton } from '@mui/material';
import { LinkProps } from 'next/link';

export type TProps = ListItemButtonProps & Partial<LinkProps>;

const ListItemButton = ({ ...props }: TProps) => <MuiListItemButton {...props} />;

export default ListItemButton;
