import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import { getPostById } from '~apis/post';
import ContainerPost from '~authenticated/[username]/_components/containers/ContainerPost';
import { MINUTE } from '~constants/query';

export const metadata: Metadata = {
	title: 'Post Detail',
	description: 'Post Detail Description',
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
		queryFn: getPostById,
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
