import ContainerHome from '~components/post/containers/ContainerHome';
import TabsMain from '~components/post/tabs/TabsMain';
import Container from '~stories/ui/containers/Container';

const Page = () => (
	<Container component='section'>
		<TabsMain />
		<ContainerHome />
	</Container>
);

export default Page;
