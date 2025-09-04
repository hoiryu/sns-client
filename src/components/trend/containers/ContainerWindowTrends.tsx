'use client';
import ListWindowScrollTrends from '~components/trend/lists/ListWindowScrollTrends';
import { IDataTrend } from '~models/trend';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps {
	data: IDataTrend[];
}

const ContainerWindowTrends = ({ data }: IProps) => {
	return (
		<Container component='section'>
			<Typography className={cn('p-4')} children='Trends for you' />
			<ListWindowScrollTrends data={data} />
		</Container>
	);
};

export default ContainerWindowTrends;
