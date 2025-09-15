'use client';
import { InfiniteData, UseSuspenseInfiniteQueryResult } from '@tanstack/react-query';
import ListItemEmptyPost from '~components/post/lists/ListItemEmptyPost';
import ListItemPost from '~components/post/lists/ListItemPost';
import { IDataPost } from '~models/post';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

interface IProps {
	query: UseSuspenseInfiniteQueryResult<InfiniteData<IDataPost[]>, Error>;
}

const ListWindowScrollPosts = ({ query }: IProps) => (
	<ListWindowScroll
		component={ListItemPost}
		componentEmpty={ListItemEmptyPost}
		query={query}
		size={400}
	/>
);

export default ListWindowScrollPosts;
