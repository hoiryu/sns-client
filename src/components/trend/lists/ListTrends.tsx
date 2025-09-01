'use client';
import ListItemTrend from '~components/trend/lists/ListItemTrend';
import { IDataTrend } from '~models/trend';
import Box from '~stories/ui/containers/Box';
import ListLazy from '~stories/ui/lists/ListLazy';

interface IProps {
	datas: IDataTrend[];
}

const ListTrends = ({ datas }: IProps) => {
	const height = 80;
	return (
		<Box component='article' style={{ height: `${height * 5}px` }}>
			<ListLazy
				rowComponent={ListItemTrend}
				rowCount={datas.length}
				rowHeight={height}
				rowProps={{ datas }}
				overscanCount={5}
			/>
		</Box>
	);
};

export default ListTrends;
