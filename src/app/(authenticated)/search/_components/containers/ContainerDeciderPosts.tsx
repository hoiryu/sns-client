'use client';
import { useStoreCategorySearch } from '~src/stores/storeSearch';

const ContainerDeciderPosts = () => {
	const { category } = useStoreCategorySearch();
	// const query = postsService.getPostsByCategory(category);
	return null;
	// return <ListWindowScrollPosts query={query} />;
};

export default ContainerDeciderPosts;
