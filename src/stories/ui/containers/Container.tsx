import { ContainerProps, Container as MuiContainer } from '@mui/material';

interface IProps extends ContainerProps {}

const Container = ({ ...props }: IProps) => <MuiContainer {...props} />;

export default Container;
