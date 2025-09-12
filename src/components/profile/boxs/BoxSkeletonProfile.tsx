import Box from '~stories/ui/containers/Box';
import Avatar from '~stories/ui/profiles/Avatar';
import Skeleton from '~stories/ui/skeletons/Skeleton';
import { cn } from '~utils/cn';

const BoxSkeletonProfile = () => {
	return (
		<>
			<Avatar className={cn('h-24 w-24')} />
			<Box>
				<Skeleton variant='rounded' width='100%' height={20} />
			</Box>
		</>
	);
};

export default BoxSkeletonProfile;
