import { Metadata } from 'next';
import TabsPost from '~authenticated/home/_components/tabs/TabsPost';
import FormCreatePost from '~components/post/forms/FormCreatePost';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import Container from '~stories/ui/containers/Container';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home Description',
};

interface IProps {
	searchParams: Promise<{ category: string }>;
}

const Page = async ({ searchParams }: IProps) => {
	const { category } = await searchParams;

	return (
		<Container component='section'>
			<TabsPost />
			<FormCreatePost maxRows={2} minRows={2} />
			<Container component='article'>
				<ListWindowScrollPosts category={category} />
			</Container>
		</Container>
	);
};

export default Page;
