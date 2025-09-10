import { Metadata } from 'next';
import ContainerDetailPost from '~authenticated/[username]/_components/containers/ContainerDetailPost';

export const metadata: Metadata = {
	title: 'Post Detail',
	description: 'Post Detail Description',
};

/**
 * Post 상세화면
 */
interface IProps {
	params: Promise<{
		username: string;
		id: string;
	}>;
}

const Page = async ({ params }: IProps) => {
	const { id } = await params;

	return <ContainerDetailPost query={{ id }} />;
};

export default Page;
