import ContainerSuspenseFollows from '~authenticated/_components/containers/ContainerSuspenseFollows';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const SidebarRight = () => {
	// const segment = useSelectedLayoutSegment();

	return (
		<Container component='section'>
			{/* {segment !== 'search' && ( */}
			{/* <>
				<Container
					component='article'
					className={cn('dark:bg-dark sticky top-0 z-10 rounded-2xl bg-white')}
				>
					<FormSearch />
				</Container>
			</> */}
			{/* )} */}
			<Container component='section'>
				<Typography className={cn('p-4')} children='회원님을 위한 추천' />

				<Container
					className={cn(
						'dark:bg-dark overflow-hidden rounded-2xl border-1 border-neutral-100 shadow-lg dark:border-transparent',
					)}
				>
					<ContainerSuspenseFollows />
				</Container>
			</Container>
		</Container>
	);
};

export default SidebarRight;
