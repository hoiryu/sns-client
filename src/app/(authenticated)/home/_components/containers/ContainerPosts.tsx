'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import { TCategorysPost } from '~models/post';
import postService from '~services/postService';

interface IProps {
	category: TCategorysPost;
}

const ContainerPosts = ({ category }: IProps) => {
	const query = postService.getPostsByCategory(category);

	return <ListWindowScrollPosts query={query} />;
};

export default ContainerPosts;
