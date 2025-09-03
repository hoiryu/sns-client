'use client';
import ContainerFollowing from '~components/post/containers/ContainerFollowing';
import ContainerRecommended from '~components/post/containers/ContainerRecommended';
import FormCreatePost from '~components/post/forms/FormCreatePost';
import { useStoreTabsMain } from '~src/stores/storeTabsMain';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

const ContainerHome = () => {
	const { value } = useStoreTabsMain();

	return (
		<Container component='section' className={cn('flex flex-col gap-8')}>
			<FormCreatePost />
			{value === 'recommended' && <ContainerRecommended />}
			{value === 'following' && <ContainerFollowing />}
		</Container>
	);
};

export default ContainerHome;
