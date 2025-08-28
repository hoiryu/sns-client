import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { SvgIconProps } from '@mui/material';

interface IProps extends SvgIconProps {}

const IconUpload = ({ ...props }: IProps) => <CloudUploadIcon {...props} />;

export default IconUpload;
