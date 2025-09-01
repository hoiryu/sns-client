'use client';
import ListItemFollow from '~components/follow/lists/ListItemFollow';
import { IDataUser } from '~models/user';
import Box from '~stories/ui/containers/Box';
import ListLazy from '~stories/ui/lists/ListLazy';

interface IProps {
	datas: IDataUser[];
}

const ListFollows = ({ datas }: IProps) => {
	const height = 80;

	return (
		<Box component='article' style={{ height: `${height * 5}px` }}>
			<ListLazy
				rowComponent={ListItemFollow}
				rowCount={datas.length}
				rowHeight={height}
				rowProps={{ datas }}
				overscanCount={5}
			/>
		</Box>
	);
};

export default ListFollows;
