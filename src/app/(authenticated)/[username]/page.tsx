import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import { getPostsByUsername } from '~apis/post';
import ContainerPosts from '~authenticated/[username]/_components/containers/ContainerPosts';
import BoxProfile from '~components/profile/boxs/BoxProfile';
import { MINUTE } from '~constants/query';
import Container from '~stories/ui/containers/Container';

export const metadata: Metadata = {
	title: 'Profile',
	description: 'Prifile Description',
};

interface IProps {
	params: Promise<{
		username: string;
	}>;
}

const Page = async ({ params }: IProps) => {
	const { username } = await params;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['posts', username],
		queryFn: getPostsByUsername,
		staleTime: 10 * MINUTE,
		gcTime: 11 * MINUTE,
	});

	const dehydratedState = dehydrate(queryClient);

	return (
		<Container>
			<BoxProfile />
			<HydrationBoundary state={dehydratedState}>
				<ContainerPosts username={username} />
			</HydrationBoundary>
		</Container>
	);
};

export default Page;
