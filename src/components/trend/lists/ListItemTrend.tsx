import Link from 'next/link';
import { IDataTrend } from '~models/trend';
import { IListItemButtonProps } from '~models/ui/list';
import ListItemButton from '~stories/ui/lists/ListItemButton';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

interface IProps extends IListItemButtonProps {
	data: IDataTrend;
}
const ListItemTrend = ({ data, className, ...props }: IProps) => (
	<ListItemButton
		component={Link}
		href={'/search?q=trend'}
		className={cn(className, 'grid grid-cols-1 items-start justify-center')}
		{...props}
	>
		<Typography className={cn('truncate text-sm')} children={data.title} />
		<Typography className={cn('truncate text-sm')} children={data.user.name} />
		<Typography className={cn('truncate text-sm')} children={`${data.posts} posts`} />
	</ListItemButton>
);

export default ListItemTrend;
