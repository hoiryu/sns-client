'use client';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import postService from '~services/postService';
import { useStoreCategorySearch } from '~src/stores/storeSearch';

const ContainerDeciderPosts = () => {
	const { category } = useStoreCategorySearch();
	const query = postService.getPostsByCategory(category);

	return <ListWindowScrollPosts query={query} />;
};

export default ContainerDeciderPosts;
