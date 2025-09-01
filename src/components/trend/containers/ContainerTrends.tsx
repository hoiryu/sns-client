import cn from 'classnames';
import ListTrends from '~components/trend/lists/ListTrends';
import { IDataTrend } from '~models/trend';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';

const ContainerTrends = () => {
	const datas: IDataTrend[] = Array.from({ length: 20 }, (_, index) => {
		return {
			name: `유저 ${index}`,
			posts: index,
		};
	});

	return (
		<Container component='section'>
			<Typography className={cn('p-4')} children='Trends for you' />
			<Container
				className={cn(
					'dark:bg-dark overflow-hidden rounded-2xl border-1 border-neutral-100 shadow-lg dark:border-transparent',
				)}
			>
				<ListTrends datas={datas} />
			</Container>
		</Container>
	);
};

export default ContainerTrends;
