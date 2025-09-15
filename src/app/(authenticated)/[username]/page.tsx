import { Metadata } from 'next';
import { Suspense } from 'react';
import ContainerSuspensePosts from '~authenticated/[username]/_components/containers/ContainerSuspensePosts';
import ListItemSkeletonPost from '~components/post/lists/ListItemSkeletonPost';
import BoxProfile from '~components/profile/boxs/BoxProfile';
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

	return (
		<Container>
			<BoxProfile name={decodeURI(username)} />
			<Suspense
				fallback={Array.from({ length: 5 }, (_1, index) => (
					<ListItemSkeletonPost key={index} />
				))}
			>
				<ContainerSuspensePosts username={username} />
			</Suspense>
		</Container>
	);
};

export default Page;
