import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { SwiperSlide } from 'swiper/react';
import CheckboxChat from '~components/post/checkboxs/CheckboxChat';
import CheckboxFavorite from '~components/post/checkboxs/CheckboxFavorite';
import CheckboxRepost from '~components/post/checkboxs/CheckboxRepost';
import { IDataPost } from '~models/post';
import { IListItemProps } from '~models/ui/list';
import { IUpdatePostSchema, updatePostSchema } from '~schemas/post';
import Box from '~stories/ui/containers/Box';
import ListItem from '~stories/ui/lists/ListItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Slides from '~stories/ui/slides/Slides';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';
import { formatTimeAgo } from '~utils/date';

interface IProps extends IListItemProps {
	data: IDataPost;
}

const ListItemPost = ({ data, ...props }: IProps) => {
	// const { data: session } = useSession();

	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<IUpdatePostSchema>({
		resolver: zodResolver(updatePostSchema),
		defaultValues: async () => {
			// const { chat, repost, favorite } = data;
			// const checkedChat = _.includes(chat, session?.author?.id);
			// const checkedRepost = _.includes(repost, session?.author?.id);
			// const checkedFavorite = _.includes(favorite, session?.author?.id);

			return {
				chat: false,
				repost: false,
				favorite: false,
			};
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: IUpdatePostSchema) => {
		console.log(data);
	};

	return (
		<ListItem disablePadding {...props}>
			<Container
				component='section'
				className={cn('grid h-full grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 py-6')}
			>
				<Box className={cn('grid grid-cols-1 gap-1')}>
					<ListItem
						component={Link}
						href={`/${data.author.nickname}`}
						className={cn('flex max-w-full items-center gap-2 p-0')}
					>
						<Avatar src={data.author.image} classes={{ root: cn('h-8 w-8') }} />

						<Typography
							className={cn('truncate text-sm')}
							children={`${data.author.nickname}`}
						/>

						<Typography
							className={cn('truncate text-sm')}
							children={`${data.author.email}`}
						/>

						<Typography
							className={cn('truncate text-xs text-gray-300')}
							children={formatTimeAgo(data.createdAt)}
						/>
					</ListItem>

					<Typography className={cn('truncate text-sm')} children={`${data.content}`} />
				</Box>

				<ListItem
					component={Link}
					href={`/${data.author.nickname}/${data.id}`}
					disablePadding
					style={{ height: '100%' }}
				>
					<Slides
						className={cn('h-full rounded-2xl')}
						children={data.images.map(image => (
							<SwiperSlide
								key={`slide-${image.id}`}
								style={{ height: '100%' }}
								children={
									<Image
										key={`image-${image.id}`}
										className={cn('object-cover')}
										src={image.path}
										alt={`post-${image.id}`}
										fill
										sizes='200px'
									/>
								}
							/>
						))}
					/>
				</ListItem>

				<Box component='form' className='flex items-center justify-between'>
					<Box className={cn('flex items-center')}>
						<CheckboxChat<IUpdatePostSchema>
							name='chat'
							control={control}
							formState={formState}
							onChange={zodSubmit(handleSubmit)}
						/>
						{/* <Typography children={data.chat.length} /> */}
					</Box>

					<Box className={cn('flex items-center')}>
						<CheckboxRepost
							name='repost'
							control={control}
							formState={formState}
							onChange={zodSubmit(handleSubmit)}
						/>
						{/* <Typography children={data.repost.length} /> */}
					</Box>

					<Box className={cn('flex items-center')}>
						<CheckboxFavorite<IUpdatePostSchema>
							name='favorite'
							control={control}
							formState={formState}
							onChange={zodSubmit(handleSubmit)}
						/>
						{/* <Typography children={data.favorite.length} /> */}
					</Box>
				</Box>
			</Container>
		</ListItem>
	);
};

export default ListItemPost;
