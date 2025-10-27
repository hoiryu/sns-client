import Link from 'next/link';
import { IListItemProps } from '~models/ui/list';
import { IDataUser } from '~models/user';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import ListItem from '~stories/ui/lists/ListItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps extends IListItemProps {
	data: IDataUser;
}

const ListItemFollow = ({ data, className, style }: IProps) => (
	<ListItem
		component={Link}
		href={`/${data.nickname}`}
		className={cn(className, 'grid grid-cols-[auto_1fr_auto] items-center gap-2')}
		style={style}
	>
		<Avatar src={data.profile.path} classes={{ root: cn('h-8 w-8') }} />
		<Box className={cn('overflow-hidden')}>
			<Typography className={cn('truncate text-sm')} children={`${data.nickname}`} />
			<Typography className={cn('truncate text-sm')} children={`${data.email}`} />
		</Box>
		<Button className='min-w-0 shrink-0' variant='outlined' size='small' children='follow' />
	</ListItem>
);

export default ListItemFollow;
