'use client';
import { Container } from '@mui/material';
import ContainerFollowing from '~authenticated/home/_components/containers/ContainerFollowing';
import ContainerRecommended from '~authenticated/home/_components/containers/ContainerRecommended';
import { storeTabsPost } from '~src/stores/storeTabsPost';
import { cn } from '~utils/cn';

const TabPanelPost = () => {
	const { value } = storeTabsPost();

	return (
		<Container component='section' className={cn('flex flex-col gap-8')}>
			{value === 'recommended' && <ContainerRecommended />}
			{value === 'following' && <ContainerFollowing />}
		</Container>
	);
};

export default TabPanelPost;
