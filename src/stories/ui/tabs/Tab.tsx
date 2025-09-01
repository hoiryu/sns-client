import { Tab as MuiTab } from '@mui/material';
import { TTabProps } from '~models/ui/tabs';

const Tab = ({ ...props }: TTabProps) => <MuiTab {...props} />;

export default Tab;
