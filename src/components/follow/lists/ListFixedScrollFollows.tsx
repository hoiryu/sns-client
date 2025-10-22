'use client';
import ListItemEmptyFollow from '~components/follow/lists/ListItemEmptyFollow';
import ListItemFollow from '~components/follow/lists/ListItemFollow';
import ListItemSkeletonFollow from '~components/follow/lists/ListItemSkeletonFollow';
import usersService from '~services/usersService';
import ListFixedScroll from '~stories/ui/lists/ListFixedScroll';

const ListFixedScrollFollows = () => {
	const query = usersService.getUsers();

	return (
		<ListFixedScroll
			component={ListItemFollow}
			componentEmpty={ListItemEmptyFollow}
			componentSkeleton={ListItemSkeletonFollow}
			query={query}
			size={70}
		/>
	);
};

export default ListFixedScrollFollows;
