import ContainerPosts from '~authenticated/[username]/_components/containers/ContainerPosts';
import BoxProfile from '~components/profile/boxs/BoxProfile';
import Container from '~stories/ui/containers/Container';

const Page = () => {
	return (
		<Container>
			<BoxProfile />
			<ContainerPosts />
		</Container>
	);
};

export default Page;
