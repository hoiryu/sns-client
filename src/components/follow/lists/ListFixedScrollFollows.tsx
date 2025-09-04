'use client';
import ListItemFollow from '~components/follow/lists/ListItemFollow';
import { IDataUser } from '~models/user';
import ListFixedScroll from '~stories/ui/lists/ListFixedScroll';

interface IProps {
	data: IDataUser[];
}

const ListFixedScrollFollows = ({ data }: IProps) => (
	<ListFixedScroll<IDataUser> component={ListItemFollow} data={data} size={70} />
);

export default ListFixedScrollFollows;
