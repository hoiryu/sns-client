'use client';
import ListFixedScrollFollows from '~components/follow/lists/ListFixedScrollFollows';
import usersService from '~services/usersService';

const ContainerFollows = () => {
	const query = usersService.getUsers();

	return <ListFixedScrollFollows query={query} />;
};

export default ContainerFollows;
