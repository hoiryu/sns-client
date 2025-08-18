import { use } from 'react';

interface IProps {
	params: Promise<{ id: string }>;
}

const Page = ({ params }: IProps) => {
	const { id } = use(params);
	return <div>book {id}</div>;
};

export default Page;
