'use client';
import { ContainerProps } from '@mui/material';
import Container from '~/stories/ui/containers/Container';

interface IProps extends ContainerProps {}

const Main = ({ ...props }: IProps) => (
	<Container
		component={'main'}
		sx={[
			theme =>
				theme.applyStyles('light', {
					backgroundColor: 'var(--color-white)',
				}),
			theme =>
				theme.applyStyles('dark', {
					backgroundColor: 'var(--color-black)',
				}),
		]}
		{...props}
	/>
);

export default Main;
