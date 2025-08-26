import ItemBook from '~components/book/ItemBook';
import { IBook } from '~models/book';
import httpClient from '~networks/http';

interface IProps {
	searchParams: Promise<{ q: string }>;
}

const Page = async ({ searchParams }: IProps) => {
	const { q } = await searchParams;

	const datas = await httpClient
		.fetch<null, IBook[]>('/books', {
			method: 'GET',
		})
		.then(res => res.data);

	return (
		<div>
			{datas.map(data => (
				<ItemBook key={data.id} data={data} />
			))}
		</div>
	);
};
export default Page;
