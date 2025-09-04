import { useQuery } from '@tanstack/react-query';
import ListFixedScrollFollows from '~components/follow/lists/ListFixedScrollFollows';
import { IDataUser } from '~models/user';
import httpClient from '~networks/http';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ContainerFollows = () => {
	const { data } = useQuery({
		queryKey: ['post'],
		queryFn: () =>
			httpClient
				.fetch<null, IDataUser[]>('/users', {
					method: 'GET',
				})
				.then(res => res.data),
	});

	return (
		<Container component='section'>
			<Typography className={cn('p-4')} children='People to follow' />
			<Container
				className={cn(
					'dark:bg-dark overflow-hidden rounded-2xl border-1 border-neutral-100 shadow-lg dark:border-transparent',
				)}
			>
				{data && <ListFixedScrollFollows data={data} />}
			</Container>
		</Container>
	);
};

export default ContainerFollows;
