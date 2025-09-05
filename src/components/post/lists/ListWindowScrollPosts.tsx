'use client';
import ListItemPost from '~components/post/lists/ListItemPost';
import postService from '~services/postService';
import ListWindowScroll from '~stories/ui/lists/ListWindowScroll';

const ListWindowScrollPosts = () => {
	const { data } = postService.getPosts();

	return data && <ListWindowScroll component={ListItemPost} data={data} size={400} />;
};

export default ListWindowScrollPosts;
