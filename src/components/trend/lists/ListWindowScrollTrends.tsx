'use client';
import ListItemTrend from '~components/trend/lists/ListItemTrend';
import { IDataTrend } from '~models/trend';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

interface IProps {
	data: IDataTrend[];
}

const ListWindowScrollTrends = ({ data }: IProps) => {
	return <ListWindowScroll<IDataTrend> data={data} component={ListItemTrend} size={80} />;
};

export default ListWindowScrollTrends;
