import { Suspense } from 'react';
import ContainerSuspenseFollows from '~authenticated/_components/containers/ContainerSuspenseFollows';
import ListItemSkeletonFollow from '~components/follow/lists/ListItemSkeletonFollow';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const SidebarRight = () => {
	return (
		<Container component='section'>
			<Container component='section'>
				<Typography className={cn('p-4')} children='회원님을 위한 추천' />

				<Container
					className={cn(
						'dark:bg-dark overflow-hidden rounded-2xl border border-neutral-100 shadow-lg dark:border-transparent',
					)}
				>
					<Suspense
						fallback={Array.from({ length: 5 }, (_1, index) => (
							<ListItemSkeletonFollow key={index} />
						))}
					>
						<ContainerSuspenseFollows />
					</Suspense>
				</Container>
			</Container>
		</Container>
	);
};

export default SidebarRight;
