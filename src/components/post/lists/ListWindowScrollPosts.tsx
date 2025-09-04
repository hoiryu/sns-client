'use client';
import ListItemPost from '~components/post/lists/ListItemPost';
import { IDataPost } from '~models/post';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

interface IProps {
	data: IDataPost[];
}

const ListWindowScrollPosts = ({ data }: IProps) => (
	<ListWindowScroll component={ListItemPost} data={data} size={400} />
);

export default ListWindowScrollPosts;
