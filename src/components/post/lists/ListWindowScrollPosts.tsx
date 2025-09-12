'use client';
import { UseQueryResult } from '@tanstack/react-query';
import ListItemEmptyPost from '~components/post/lists/ListItemEmptyPost';
import ListItemPost from '~components/post/lists/ListItemPost';
import ListItemSkeletonPost from '~components/post/lists/ListItemSkeletonPost';
import { IDataPost } from '~models/post';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

interface IProps {
	query: UseQueryResult<IDataPost[]>;
}

const ListWindowScrollPosts = ({ query }: IProps) => {
	const { data, isLoading } = query;
	return (
		<>
			{!data &&
				isLoading &&
				Array.from({ length: 5 }, (_, index) => <ListItemSkeletonPost key={index} />)}
			{!data && !isLoading && <ListItemEmptyPost />}
			{data && !isLoading && (
				<ListWindowScroll component={ListItemPost} data={data} size={400} />
			)}
		</>
	);
};

export default ListWindowScrollPosts;
