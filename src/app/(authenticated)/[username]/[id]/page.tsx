import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import { getPostById } from '~apis/post';
import { getUserByName } from '~apis/user';
import ContainerPost from '~authenticated/[username]/_components/containers/ContainerPost';
import { MINUTE } from '~src/consts/query';

export const generateMetadata = async ({ params }: IProps): Promise<Metadata> => {
	const { username, id } = await params;
	const [user, post] = await Promise.all([getUserByName(decodeURI(username)), getPostById(id)]);

	return {
		title: `${user.name} 의 ${post.description}`,
		description: post.description,
	};
};

/**
 * Post 상세화면
 */
interface IProps {
	params: Promise<{
		username: string;
		id: string;
	}>;
}

const Page = async ({ params }: IProps) => {
	const { id } = await params;

	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['post', id],
		queryFn: ({ queryKey }) => getPostById(queryKey[1]),
		staleTime: 10 * MINUTE,
		gcTime: 11 * MINUTE,
	});

	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrationBoundary state={dehydratedState}>
			<ContainerPost postId={id} />
		</HydrationBoundary>
	);
};

export default Page;
