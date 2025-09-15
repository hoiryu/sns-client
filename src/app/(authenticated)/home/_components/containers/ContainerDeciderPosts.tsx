'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import postService from '~services/postService';
import { useStoreCategoryHome } from '~src/stores/storeHome';

const ContainerDeciderPosts = () => {
	const { category } = useStoreCategoryHome();
	const query = postService.getPostsByCategory(category);

	return <ListWindowScrollPosts query={query} />;
};

export default ContainerDeciderPosts;
