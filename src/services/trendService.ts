import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MINUTE } from '~constants/query';
import { IDataTrend } from '~models/trend';
import httpClient from '~networks/http';

interface ITrendService {
	getTrends(): UseQueryResult<IDataTrend[]>;
}

class TrendService implements ITrendService {
	constructor() {}

	public getTrends() {
		return useQuery({
			queryKey: ['trends'],
			staleTime: 10 * MINUTE,
			queryFn: () =>
				httpClient
					.fetch<IDataTrend[]>('/trends', {
						method: 'GET',
					})
					.then(res => res.data),
		});
	}
}

const trendService = new TrendService();

export default trendService;
