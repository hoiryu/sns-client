import { AvatarProps, Avatar as MuiAvatar } from '@mui/material';

interface IProps extends AvatarProps {}

const Avatar = ({ ...props }: IProps) => <MuiAvatar {...props} />;

export default Avatar;
