'use client';
import { InfiniteData, UseSuspenseInfiniteQueryResult } from '@tanstack/react-query';
import ListItemEmptyPost from '~components/post/lists/ListItemEmptyPost';
import ListItemPost from '~components/post/lists/ListItemPost';
import { IPaginate } from '~models/api';
import { IDataPost } from '~models/post';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

interface IProps {
	query: UseSuspenseInfiniteQueryResult<InfiniteData<IPaginate<IDataPost[]>>, Error>;
}

const ListWindowScrollPosts = ({ query }: IProps) => (
	<ListWindowScroll
		component={ListItemPost}
		componentEmpty={ListItemEmptyPost}
		query={query}
		size={700}
	/>
);

export default ListWindowScrollPosts;
