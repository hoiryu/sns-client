'use client';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import ListItemEmptyPost from '~components/post/lists/ListItemEmptyPost';
import ListItemPost from '~components/post/lists/ListItemPost';
import ListItemSkeletonPost from '~components/post/lists/ListItemSkeletonPost';
import { IDataPost } from '~models/post';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

interface IProps {
	query: UseInfiniteQueryResult<InfiniteData<IDataPost[]>, Error>;
}

const ListWindowScrollPosts = ({ query }: IProps) => (
	<ListWindowScroll
		component={ListItemPost}
		componentSkeleton={ListItemSkeletonPost}
		componentEmpty={ListItemEmptyPost}
		query={query}
		size={400}
	/>
);

export default ListWindowScrollPosts;
