import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import CheckboxChat from '~components/post/checkboxs/CheckboxChat';
import CheckboxFavorite from '~components/post/checkboxs/CheckboxFavorite';
import CheckboxRepost from '~components/post/checkboxs/CheckboxRepost';
import { IDataPost } from '~models/post';
import { IListItemProps } from '~models/ui/list';
import { IUpdatePostSchema, updatePostSchema } from '~schemas/post';
import Box from '~stories/ui/containers/Box';
import ListItem from '~stories/ui/lists/ListItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';
import { formatTimeAgo } from '~utils/date';

interface IProps extends IListItemProps {
	data: IDataPost;
}

const BoxPost = ({ data, ...props }: IProps) => {
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<IUpdatePostSchema>({
		resolver: zodResolver(updatePostSchema),
		defaultValues: async () => {
			const { chat, repost, favorite } = data;
			return {
				chat,
				repost,
				favorite,
			};
		},
		mode: 'onChange',
	});

	const handleSubmit = async (data: IUpdatePostSchema) => {
		console.log(data);
	};

	return (
		<ListItem {...props}>
			<Container
				component='section'
				className={cn(
					'grid h-full w-full grid-cols-1 grid-rows-[auto_1fr_auto] justify-between gap-2',
				)}
			>
				<Box className={cn('grid grid-cols-1 gap-1')}>
					<ListItem
						component={Link}
						href={`/${data.user.name}`}
						className={cn('flex max-w-full items-center gap-2 p-0')}
					>
						<Avatar src={data.user.imageUrl} classes={{ root: cn('h-8 w-8') }} />
						<Typography className={cn('text-sm')} children={`${data.user.name}`} />
						<Typography className={cn('text-sm')} children={`${data.user.email}`} />
						<Typography
							className={cn('text-xs text-gray-300')}
							children={formatTimeAgo(data.createAt)}
						/>
					</ListItem>
					<Typography className={cn('text-sm')} children={`${data.description}`} />
				</Box>
				<Box className={cn('relative overflow-hidden rounded-2xl')}>
					<Image
						src={data.imageUrl}
						fill
						className={'object-cover'}
						sizes='200px'
						alt={`${data.user.name} 의 이미지`}
					/>
				</Box>
				<Box component='form' className='flex items-center justify-between'>
					<CheckboxChat<IUpdatePostSchema>
						name='chat'
						control={control}
						formState={formState}
						onChange={zodSubmit(handleSubmit)}
					/>
					<CheckboxRepost
						name='repost'
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

export default BoxPost;
