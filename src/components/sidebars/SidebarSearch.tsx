import ContainerFollows from '~components/follow/containers/ContainerFollows';
import FormSearch from '~components/search/forms/FormSearch';
import ContainerTrends from '~components/trend/containers/ContainerTrends';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

const SidebarSearch = () => {
	return (
		<Container component='section'>
			<Container
				component='article'
				className={cn('dark:bg-dark sticky top-0 z-10 rounded-2xl bg-white')}
			>
				<FormSearch />
			</Container>
			<ContainerTrends />
			<ContainerFollows />
		</Container>
	);
};

export default SidebarSearch;
