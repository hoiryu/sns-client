import TabsSearch from '~authenticated/search/_components/tabs/TabsSearch';
import ListWindowScrollPosts from '~components/post/lists/ListWindowScrollPosts';
import FormSearch from '~components/search/forms/FormSearch';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps {
	searchParams: Promise<{ category: string }>;
}

const Page = async ({ searchParams }: IProps) => {
	const { category } = await searchParams;

	return (
		<Container component='section' className={cn('relative')}>
			<Container component='article' className={cn('px-4')}>
				<FormSearch />
			</Container>
			<TabsSearch />
			<Container component='article'>
				<ListWindowScrollPosts category={category} />
			</Container>
		</Container>
	);
};

export default Page;
