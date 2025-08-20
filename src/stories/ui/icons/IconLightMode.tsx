import LightModeIcon from '@mui/icons-material/LightMode';
import { SvgIconProps } from '@mui/material';

interface IProps extends SvgIconProps {}

const IconLightMode = ({ ...props }: IProps) => <LightModeIcon {...props} />;

export default IconLightMode;
