'use client';
import ListItemFollow from '~components/follow/lists/ListItemFollow';
import { IDataUser } from '~models/user';
import userService from '~services/userService';
import ListFixedScroll from '~stories/ui/lists/ListFixedScroll';

const ListFixedScrollFollows = () => {
	const { data } = userService.getUsers();

	return data && <ListFixedScroll<IDataUser> component={ListItemFollow} data={data} size={70} />;
};

export default ListFixedScrollFollows;
