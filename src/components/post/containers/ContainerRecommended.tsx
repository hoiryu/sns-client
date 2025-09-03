import { faker } from '@faker-js/faker';
import ListPosts from '~components/post/lists/ListPosts';
import { IDataPost } from '~models/post';
import Container from '~stories/ui/containers/Container';

const ContainerRecommended = () => {
	const datas: IDataPost[] = Array.from({ length: 2 }, (_, index) => {
		return {
			id: index,
			user: {
				id: index,
				name: `유저 ${index}`,
				email: `test${index}@gmail.com`,
				imageUrl: `/test.com/${index}`,
			},
			description: `Recommentded 테스트용 데이터 ${index}`,
			imageUrl: faker.image.urlPicsumPhotos({
				width: 200,
				height: 200,
				grayscale: false,
				blur: 0,
			}),
			favorite: true,
			chat: false,
		};
	});

	return (
		<Container component='section'>
			<ListPosts datas={datas} />
		</Container>
	);
};

export default ContainerRecommended;
