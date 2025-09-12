import Box from '~stories/ui/containers/Box';
import Container from '~stories/ui/containers/Container';
import IconChat from '~stories/ui/icons/IconChat';
import IconFavorite from '~stories/ui/icons/IconFavorite';
import IconRepost from '~stories/ui/icons/IconRepost';
import ListItem from '~stories/ui/lists/ListItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Skeleton from '~stories/ui/skeletons/Skeleton';
import { cn } from '~utils/cn';

const ListItemSkeletonPost = () => {
	return (
		<ListItem>
			<Container
				component='section'
				className={cn(
					'grid h-full w-full grid-cols-1 grid-rows-[auto_1fr_auto] justify-between gap-2',
				)}
			>
				<Box className={cn('grid grid-cols-1 gap-1')}>
					<Box className={cn('flex max-w-full items-center gap-2 p-0')}>
						<Avatar className={cn('h-8 w-8')} />
						<Skeleton variant='rounded' width='100%' height={20} />
					</Box>
					<Skeleton variant='rounded' width='100%' height={20} />
				</Box>
				<ListItem className={cn('relative overflow-hidden rounded-2xl p-0')}>
					<Skeleton variant='rounded' width='100%' height={200} />
				</ListItem>
				<Box className='flex items-center justify-between'>
					<IconChat />
					<IconRepost />
					<IconFavorite />
				</Box>
			</Container>
		</ListItem>
	);
};

export default ListItemSkeletonPost;
