import { Tab as MuiTab } from '@mui/material';
import { TTabProps } from '~models/tabs';

const Tab = ({ ...props }: TTabProps) => <MuiTab {...props} />;

export default Tab;
