import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SvgIconProps } from '@mui/material';

interface IProps extends SvgIconProps {}

const IconDarkMode = ({ ...props }: IProps) => <DarkModeIcon {...props} />;

export default IconDarkMode;
