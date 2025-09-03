import Link from 'next/link';
import { RowComponentProps } from 'react-window';
import { IDataTrend } from '~models/trend';
import ListItemButton from '~stories/ui/lists/ListItemButton';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ListItemTrend = ({
	index,
	datas,
	style,
}: RowComponentProps<{
	datas: IDataTrend[];
}>) => (
	<ListItemButton
		key={index}
		component={Link}
		href={'/search?q=trend'}
		className={cn('flex flex-col items-start justify-center')}
		style={style}
	>
		<Typography className={cn('text-sm')} children={`실시간 트렌드`} />
		<Typography className={cn('text-sm')} children={`${datas[index].name}`} />
		<Typography className={cn('text-sm')} children={`${datas[index].posts} posts`} />
	</ListItemButton>
);

export default ListItemTrend;
