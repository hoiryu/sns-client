'use client';
import userService from '~services/userService';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import Avatar from '~stories/ui/profiles/Avatar';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps {}

const BoxProfile = ({}: IProps) => {
	const { data: session } = userService.getMe();

	return (
		<Box className={cn('grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5')}>
			<Avatar src={session?.user?.image || undefined} className={cn('h-24 w-24')} />
			<Box className={cn('overflow-hidden')}>
				<Typography
					className={cn('truncate text-sm')}
					children={`${session?.user?.name}`}
				/>
				<Typography
					className={cn('truncate text-sm')}
					children={`${session?.user?.email}`}
				/>
			</Box>
			<Button
				className='min-w-0 shrink-0'
				variant='outlined'
				size='small'
				children='follow'
			/>
		</Box>
	);
};

export default BoxProfile;
