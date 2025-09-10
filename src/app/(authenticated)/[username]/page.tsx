import { Metadata } from 'next';
import ContainerPosts from '~authenticated/[username]/_components/containers/ContainerPosts';
import BoxProfile from '~components/profile/boxs/BoxProfile';
import Container from '~stories/ui/containers/Container';

export const metadata: Metadata = {
	title: 'Profile',
	description: 'Prifile Description',
};

const Page = () => {
	return (
		<Container>
			<BoxProfile />
			<ContainerPosts />
		</Container>
	);
};

export default Page;
