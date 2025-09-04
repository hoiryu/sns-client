'use client';
import { useQuery } from '@tanstack/react-query';
import FormSearch from '~components/search/forms/FormSearch';
import ContainerWindowTrends from '~components/trend/containers/ContainerWindowTrends';
import { IDataTrend } from '~models/trend';
import httpClient from '~networks/http';
import Container from '~stories/ui/containers/Container';

const Page = () => {
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
		<Container>
			<FormSearch />
			{data && <ContainerWindowTrends data={data} />}
		</Container>
	);
};

export default Page;
