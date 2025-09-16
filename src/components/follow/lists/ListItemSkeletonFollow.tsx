'use client';
import Box from '~stories/ui/containers/Box';
import ListItem from '~stories/ui/lists/ListItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Skeleton from '~stories/ui/skeletons/Skeleton';
import { cn } from '~utils/cn';

const ListItemSkeletonFollow = () => {
	return (
		<ListItem className={cn('grid h-[70px] grid-cols-[auto_1fr] items-center gap-2')}>
			<Avatar classes={{ root: cn('h-8 w-8') }} />
			<Box className={cn('flex flex-col gap-1 overflow-hidden')}>
				<Skeleton variant='rounded' width='100%' height={10} />
				<Skeleton variant='rounded' width='100%' height={10} />
			</Box>
		</ListItem>
	);
};

export default ListItemSkeletonFollow;
