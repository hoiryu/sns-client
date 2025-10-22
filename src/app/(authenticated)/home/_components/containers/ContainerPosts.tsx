'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import postsService from '~services/postsService';

const ContainerPosts = () => {
	const query = postsService.getPosts();

	return <ListWindowScrollPosts query={query} />;
};

export default ContainerPosts;
