import { use } from 'react';
import Box from '~/stories/ui/containers/Box';

interface IProps {
	searchParams: Promise<{ q: string }>;
}
const Page = ({ searchParams }: IProps) => {
	const { q } = use(searchParams);

	return <Box>Search Page {q}</Box>;
};

export default Page;
