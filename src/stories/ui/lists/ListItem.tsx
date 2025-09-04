import { ListItem as MuiListItem } from '@mui/material';
import { IListItemProps } from '~models/ui/list';

const ListItem = ({ ...props }: IListItemProps) => <MuiListItem {...props} />;

export default ListItem;
