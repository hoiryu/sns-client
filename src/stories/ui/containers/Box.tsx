import { BoxProps, Box as MuiBox } from '@mui/material';

interface IProps extends BoxProps {}

const Box = ({ ...props }: IProps) => <MuiBox {...props} />;

export default Box;
