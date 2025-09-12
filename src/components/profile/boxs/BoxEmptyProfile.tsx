import Box from '~stories/ui/containers/Box';
import Avatar from '~stories/ui/profiles/Avatar';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps {
	message: string;
}

const BoxEmptyProfile = ({ message }: IProps) => {
	return (
		<>
			<Avatar className={cn('h-24 w-24')} />
			<Box className={cn('overflow-hidden')}>
				<Typography className={cn('truncate text-sm')} children={`${message}`} />
			</Box>
		</>
	);
};

export default BoxEmptyProfile;
