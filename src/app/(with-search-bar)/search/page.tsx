import { use } from 'react';

interface IProps {
	searchParams: Promise<{ q: string }>;
}
const Page = ({ searchParams }: IProps) => {
	const { q } = use(searchParams);

	return <div>Search Page {q}</div>;
};

export default Page;
