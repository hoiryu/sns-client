'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import postService from '~services/postService';

const ContainerPosts = () => {
	const query = postService.usePosts();

	return <ListWindowScrollPosts query={query} />;
};

export default ContainerPosts;
