'use client';
import ListItemPost from '~components/post/lists/ListItemPost';
import { IDataPost } from '~models/post';
import Box from '~stories/ui/containers/Box';
import ListLazy from '~stories/ui/lists/ListLazy';

interface IProps {
	datas: IDataPost[];
}

const ListPosts = ({ datas }: IProps) => {
	const height = 350;

	return (
		<Box component='article'>
			<ListLazy
				rowComponent={ListItemPost}
				rowCount={datas.length}
				rowHeight={height}
				rowProps={{ datas }}
				overscanCount={5}
			/>
		</Box>
	);
};

export default ListPosts;
