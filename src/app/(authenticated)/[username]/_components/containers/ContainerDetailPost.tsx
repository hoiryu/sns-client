'use client';
import FormCreateComment from '~components/comment/forms/FormCreateComment';
import BoxPost from '~components/post/boxs/BoxPost';
import postService from '~services/postService';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

interface IProps {
	query: {
		id: string;
	};
}

const ContainerDetailPost = ({ query }: IProps) => {
	const { data } = postService.getPostById(query.id);

	return (
		<Container component='section'>
			{data && <BoxPost data={data} className={cn('h-[500px]')} />}
			<FormCreateComment maxRows={2} minRows={2} />
		</Container>
	);
};

export default ContainerDetailPost;
