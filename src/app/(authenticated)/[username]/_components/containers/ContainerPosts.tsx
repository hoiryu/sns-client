'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import postService from '~services/postService';

interface IProps {
	username: string;
}

const ContainerPosts = ({ username }: IProps) => {
	const query = postService.getPostsByUsername(username);

	return <ListWindowScrollPosts query={query} />;
};

export default ContainerPosts;
