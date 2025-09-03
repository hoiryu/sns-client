import cn from 'classnames';
import ContainerFollows from '~components/follow/containers/ContainerFollows';
import FormSearch from '~components/search/forms/FormSearch';
import ContainerTrends from '~components/trend/containers/ContainerTrends';
import Container from '~stories/ui/containers/Container';

const SearchSidebar = () => {
	return (
		<Container component='section'>
			<Container
				component='article'
				className={cn('dark:bg-dark sticky top-4 z-10 rounded-2xl bg-white')}
			>
				<FormSearch />
			</Container>
			<ContainerTrends />
			<ContainerFollows />
		</Container>
	);
};

export default SearchSidebar;
