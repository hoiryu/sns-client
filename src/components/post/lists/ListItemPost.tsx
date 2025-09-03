import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@mui/material';
import cn from 'classnames';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { RowComponentProps } from 'react-window';
import CheckboxChat from '~components/post/checkboxs/CheckboxChat';
import CheckboxFavorite from '~components/post/checkboxs/CheckboxFavorite';
import { IDataPost } from '~models/post';
import { IUpdatePostSchema, updatePostSchema } from '~schemas/post';
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
}>) => {
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<IUpdatePostSchema>({
		resolver: zodResolver(updatePostSchema),
		defaultValues: async () => {
			const { chat, favorite } = datas[index];
			return {
				chat,
				favorite,
			};
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: IUpdatePostSchema) => {
		console.log(data);
	};

	return (
		<ListItem key={index} component='article' style={style}>
			<Container
				component='section'
				className={cn('flex h-full w-full flex-col justify-between gap-2')}
			>
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
						priority
						alt={`${datas[index].user.name} 의 이미지`}
					/>
				</Box>
				<Box component='form' className='flex items-center justify-between'>
					<CheckboxChat<IUpdatePostSchema>
						name='chat'
						control={control}
						formState={formState}
						onChange={zodSubmit(handleSubmit)}
					/>
					<CheckboxFavorite<IUpdatePostSchema>
						name='favorite'
						control={control}
						formState={formState}
						onChange={zodSubmit(handleSubmit)}
					/>
				</Box>
			</Container>
		</ListItem>
	);
};

export default ListItemPost;
