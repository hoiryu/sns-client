'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import ContainerFollows from '~components/follow/containers/ContainerFollows';
import FormSearch from '~components/search/forms/FormSearch';
import ContainerTrends from '~components/trend/containers/ContainerTrends';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

const SidebarSearch = () => {
	const segment = useSelectedLayoutSegment();

	return (
		<Container component='section'>
			{segment !== 'search' && (
				<>
					<Container
						component='article'
						className={cn('dark:bg-dark sticky top-0 z-10 rounded-2xl bg-white')}
					>
						<FormSearch />
					</Container>
					<ContainerTrends
						className={cn(
							'dark:bg-dark overflow-hidden rounded-2xl border-1 border-neutral-100 shadow-lg dark:border-transparent',
						)}
						limit={5}
					/>
				</>
			)}
			<ContainerFollows />
		</Container>
	);
};

export default SidebarSearch;
