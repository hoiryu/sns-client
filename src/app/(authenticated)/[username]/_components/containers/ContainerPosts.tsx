'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';

interface IProps {
	username: string;
}

const ContainerPosts = ({ username }: IProps) => {
	// const query = postService.getPostsByUsername(username);
	return null;
	return <ListWindowScrollPosts query={query} />;
};

export default ContainerPosts;
