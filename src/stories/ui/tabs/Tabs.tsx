import { Tabs as MuiTabs, TabsProps } from '@mui/material';

interface IProps extends TabsProps {}

const Tabs = ({ ...props }: IProps) => <MuiTabs {...props} />;

export default Tabs;
