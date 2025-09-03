import { ListItemProps, ListItem as MuiListItem } from '@mui/material';
import { LinkProps } from 'next/link';

export type TProps = ListItemProps & Partial<LinkProps>;

const ListItem = ({ ...props }: TProps) => <MuiListItem {...props} />;

export default ListItem;
