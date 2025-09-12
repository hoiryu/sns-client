'use client';
import BoxEmptyProfile from '~components/profile/boxs/BoxEmptyProfile';
import BoxSkeletonProfile from '~components/profile/boxs/BoxSkeletonProfile';
import userService from '~services/userService';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import Avatar from '~stories/ui/profiles/Avatar';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps {
	name: string;
}

const BoxProfile = ({ name }: IProps) => {
	const { data, error, isError, isLoading } = userService.getUserByName(name);

	return (
		<Box className={cn('grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5')}>
			{!data && isLoading && <BoxSkeletonProfile />}
			{!data && !isLoading && isError && <BoxEmptyProfile message={error.message} />}
			{data && (
				<>
					<Avatar src={data.image} className={cn('h-24 w-24')} />
					<Box className={cn('overflow-hidden')}>
						<Typography className={cn('truncate text-sm')} children={`${data.name}`} />
						<Typography className={cn('truncate text-sm')} children={`${data.email}`} />
					</Box>
					<Button
						className='min-w-0 shrink-0'
						variant='outlined'
						size='small'
						children='follow'
					/>
				</>
			)}
		</Box>
	);
};

export default BoxProfile;
