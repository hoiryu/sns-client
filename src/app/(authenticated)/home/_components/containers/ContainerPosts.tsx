'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import { TCategorysPost } from '~models/post';
import postService from '~services/postService';

interface IProps {
	category: TCategorysPost;
}

const ContainerPosts = ({ category }: IProps) => {
	const { data } = postService.getPostsByCategory(category);

	return data && <ListWindowScrollPosts data={data} />;
};

export default ContainerPosts;
