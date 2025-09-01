import cn from 'classnames';
import Image from 'next/image';
import { RowComponentProps } from 'react-window';
import { IDataPost } from '~models/post';
import Box from '~stories/ui/containers/Box';
import ListItem from '~stories/ui/lists/ListItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Typography from '~stories/ui/typographys/Typography';

const ListItemPost = ({
	index,
	datas,
	style,
}: RowComponentProps<{
	datas: IDataPost[];
}>) => (
	<ListItem key={index} component='article' style={style}>
		<Box className={cn('flex h-full w-full flex-col justify-between gap-2')}>
			<Box className={cn('flex flex-col gap-2')}>
				<Box className={cn('flex max-w-full items-center gap-2')}>
					<Avatar classes={{ root: cn('hidden h-9 w-9 lg:flex') }} />
					<Typography
						className={cn('truncate text-sm')}
						children={`${datas[index].user.name}`}
					/>
					<Typography
						className={cn('truncate text-sm')}
						children={`${datas[index].user.email}`}
					/>
				</Box>
				<Typography
					className={cn('truncate text-sm')}
					children={`${datas[index].description}`}
				/>
			</Box>
			<Box className={cn('relative h-72 w-full overflow-hidden rounded-2xl')}>
				<Image
					src={datas[index].imageUrl}
					fill
					className={'object-cover'}
					sizes='280px'
					alt={`${datas[index].user.name} 의 이미지`}
				/>
			</Box>
		</Box>
	</ListItem>
);

export default ListItemPost;
