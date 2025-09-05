'use client';
import ListItemTrend from '~components/trend/lists/ListItemTrend';
import { IDataTrend } from '~models/trend';
import trendService from '~services/trendService';
import ListFixedScroll from '~stories/ui/lists/ListFixedScroll';

const ListFixedScrollTrends = () => {
	const { data } = trendService.getTrends();

	return data && <ListFixedScroll<IDataTrend> component={ListItemTrend} data={data} size={80} />;
};

export default ListFixedScrollTrends;
