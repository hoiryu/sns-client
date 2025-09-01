import ContainerRecommended from '~components/post/containers/ContainerRecommended';
import TabsMain from '~components/post/tabs/TabsMain';
import Container from '~stories/ui/containers/Container';

const Page = () => {
	return (
		<Container component='section'>
			<TabsMain />
			<ContainerRecommended />
		</Container>
	);
};

export default Page;
