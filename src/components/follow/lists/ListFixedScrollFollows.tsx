'use client';
import { InfiniteData, UseSuspenseInfiniteQueryResult } from '@tanstack/react-query';
import ListItemEmptyFollow from '~components/follow/lists/ListItemEmptyFollow';
import ListItemFollow from '~components/follow/lists/ListItemFollow';
import { IPaginate } from '~models/api';
import { IDataUser } from '~models/user';
import ListFixedScroll from '~stories/ui/lists/ListFixedScroll';

interface IProps {
	query: UseSuspenseInfiniteQueryResult<InfiniteData<IPaginate<IDataUser[]>>, Error>;
}

const ListFixedScrollFollows = ({ query }: IProps) => (
	<ListFixedScroll
		component={ListItemFollow}
		componentEmpty={ListItemEmptyFollow}
		query={query}
		size={70}
	/>
);

export default ListFixedScrollFollows;
