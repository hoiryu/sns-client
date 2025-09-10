'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import { TCategorysPost } from '~models/post';
import postService from '~services/postService';
import Container from '~stories/ui/containers/Container';

interface IProps {
	category: TCategorysPost;
}

const ContainerPosts = ({ category }: IProps) => {
	const { data } = postService.getPostsByCategory(category);

	return (
		<Container component='article'>{data && <ListWindowScrollPosts data={data} />}</Container>
	);
};

export default ContainerPosts;
