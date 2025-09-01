import cn from 'classnames';
import ListFollows from '~components/follow/lists/ListFollows';
import { IDataUser } from '~models/user';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';

const ContainerFollows = () => {
	const datas: IDataUser[] = Array.from({ length: 20 }, (_, index) => {
		return {
			id: index,
			name: `유저 ${index}`,
			email: `test${index}@gmail.com`,
			imageUrl: `/test.com/${index}`,
		};
	});

	return (
		<Container component='section'>
			<Typography className={cn('p-4')} children='People to follow' />
			<Container
				className={cn(
					'dark:bg-dark overflow-hidden rounded-2xl border-1 border-neutral-100 shadow-lg dark:border-transparent',
				)}
			>
				<ListFollows datas={datas} />
			</Container>
		</Container>
	);
};

export default ContainerFollows;
