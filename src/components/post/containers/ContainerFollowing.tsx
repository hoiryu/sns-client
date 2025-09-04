import { useQuery } from '@tanstack/react-query';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import { IDataPost } from '~models/post';
import httpClient from '~networks/http';
import Container from '~stories/ui/containers/Container';

const ContainerFollowing = () => {
	const { data } = useQuery({
		queryKey: ['post'],
		queryFn: () =>
			httpClient
				.fetch<null, IDataPost[]>('/posts', {
					method: 'GET',
				})
				.then(res => res.data),
	});

	return (
		<Container component='section'>{data && <ListWindowScrollPosts data={data} />}</Container>
	);
};

export default ContainerFollowing;
