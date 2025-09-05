'use client';
import ListItemTrend from '~components/trend/lists/ListItemTrend';
import { IDataTrend } from '~models/trend';
import trendService from '~services/trendService';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

const ListWindowScrollTrends = () => {
	const { data } = trendService.getTrends();

	return data && <ListWindowScroll<IDataTrend> component={ListItemTrend} data={data} size={80} />;
};

export default ListWindowScrollTrends;
