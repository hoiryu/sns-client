import { ListItemProps, ListItem as MuiListItem } from '@mui/material';

export interface IProps extends ListItemProps {}

const ListItem = ({ ...props }: IProps) => <MuiListItem {...props} />;

export default ListItem;
