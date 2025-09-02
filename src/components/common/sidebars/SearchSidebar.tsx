import cn from 'classnames';
import TextFieldSearch from '~components/common/inputs/TextFieldSearch';
import ContainerFollows from '~components/follow/containers/ContainerFollows';
import ContainerTrends from '~components/trend/containers/ContainerTrends';
import Container from '~stories/ui/containers/Container';

const SearchSidebar = () => {
	return (
		<Container component='section'>
			<Container
				component='article'
				className={cn('dark:bg-dark sticky top-4 z-10 rounded-2xl bg-white')}
			>
				<TextFieldSearch />
			</Container>
			<ContainerTrends />
			<ContainerFollows />
		</Container>
	);
};

export default SearchSidebar;
