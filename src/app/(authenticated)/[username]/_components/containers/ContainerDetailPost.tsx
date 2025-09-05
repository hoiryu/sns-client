'use client';
import BoxPost from '~components/post/boxs/BoxPost';
import postService from '~services/postService';

interface IProps {
	query: {
		id: string;
	};
}

const ContainerDetailPost = ({ query }: IProps) => {
	const { data } = postService.getPostById(query.id);

	return <>{data && <BoxPost data={data} />}</>;
};

export default ContainerDetailPost;
