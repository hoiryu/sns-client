'use client';
import { ContainerProps } from '@mui/material';
import Container from '~/stories/ui/containers/Container';
interface IProps extends ContainerProps {}

const Main = ({ ...props }: IProps) => <Container component={'main'} {...props} />;

export default Main;
