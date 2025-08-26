import cn from 'classnames';
import Link from 'next/link';
import { IBook } from '~models/book';
import Box from '~stories/ui/containers/Box';

interface IProps {
	data: IBook;
}

const ItemBook = ({
	data: { id, title, subTitle, author, publisher, description, imageUrl },
}: IProps) => {
	return (
		<Link
			href={`/book/${id}`}
			className={cn('grid grid-cols-[auto_1fr] gap-10 border-b border-neutral-700 py-10')}
		>
			<Box className={cn('w-[150px]')}>
				<img className={cn('object-cover')} src={imageUrl} alt={title} />
			</Box>
			<Box className='flex flex-col gap-4'>
				<p>{title}</p>
				<p>{subTitle}</p>
				<Box className='flex gap-4'>
					<p>{author}</p>
					<p>|</p>
					<p>{publisher}</p>
				</Box>
			</Box>
		</Link>
	);
};

export default ItemBook;
