import { useQuery } from '@tanstack/react-query';
import { IDataTrend } from '~models/trend';
import httpClient from '~networks/http';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps {
	className?: string;
	limit?: number;
}

const ContainerTrends = ({ className, limit }: IProps) => {
	const { data } = useQuery({
		queryKey: ['trend'],
		queryFn: () =>
			httpClient
				.fetch<null, IDataTrend[]>('/trends', {
					method: 'GET',
				})
				.then(res => res.data),
	});

	return (
		<Container component='section'>
			<Typography className={cn('p-4')} children='Trends for you' />
			<Container className={cn(className)}>
				{/* {data && <ListTrends limit={limit} data={data} />} */}
			</Container>
		</Container>
	);
};

export default ContainerTrends;
