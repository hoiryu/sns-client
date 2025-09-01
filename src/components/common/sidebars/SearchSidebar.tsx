import cn from 'classnames';
import TextFieldSearch from '~components/common/inputs/TextFieldSearch';
import ContainerFollows from '~components/follow/containers/ContainerFollows';
import ContainerTrends from '~components/trend/containers/ContainerTrends';
import Container from '~stories/ui/containers/Container';

const SearchSidebar = () => {
	return (
		<Container component='section' className={cn('grid grid-cols-1 grid-rows-[auto_1fr]')}>
			<Container
				component='article'
				className={cn('dark:bg-dark sticky top-0 z-10 rounded-2xl bg-white')}
			>
				<TextFieldSearch />
			</Container>
			<ContainerTrends />
			<ContainerFollows />
		</Container>
	);
};

export default SearchSidebar;
