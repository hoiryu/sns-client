'use client';
import { useEffect } from 'react';
import ListItemPost from '~components/post/lists/ListItemPost';
import postService from '~services/postService';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

interface IProps {
	category?: string; // QueryString
}

const ListWindowScrollPosts = ({ category = '' }: IProps) => {
	const { data } = postService.getPostsByCategory({ category });
	useEffect(() => console.log(category), [category]);
	return data && <ListWindowScroll component={ListItemPost} data={data} size={400} />;
};

export default ListWindowScrollPosts;
