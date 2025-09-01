import cn from 'classnames';
import { RowComponentProps } from 'react-window';
import { IDataUser } from '~models/user';
import Button from '~stories/ui/buttons/Button';
import Box from '~stories/ui/containers/Box';
import ListItem from '~stories/ui/lists/ListItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Typography from '~stories/ui/typographys/Typography';

const ListItemFollow = ({
	index,
	datas,
	style,
}: RowComponentProps<{
	datas: IDataUser[];
}>) => (
	<ListItem key={index} className={cn('flex flex-wrap items-center gap-2')} style={style}>
		<Avatar classes={{ root: cn('hidden h-9 w-9 lg:flex') }} />
		<Box className='mr-auto max-w-full'>
			<Typography className={cn('truncate text-sm')} children={`${datas[index].name}`} />
			<Typography className={cn('truncate text-sm')} children={`${datas[index].email}`} />
		</Box>
		<Button className='min-w-0' variant='outlined' size='small' children='follow' />
	</ListItem>
);

export default ListItemFollow;
