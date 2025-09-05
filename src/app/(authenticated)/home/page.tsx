import TabPanelPost from '~authenticated/home/_components/tabs/TabPanelPost';
import TabsPost from '~authenticated/home/_components/tabs/TabsPost';
import FormCreatePost from '~components/post/forms/FormCreatePost';
import Container from '~stories/ui/containers/Container';

const Page = () => {
	return (
		<Container component='section'>
			<TabsPost />
			<FormCreatePost maxRows={2} minRows={2} />
			<TabPanelPost />
		</Container>
	);
};

export default Page;
