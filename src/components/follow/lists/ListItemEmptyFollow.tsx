import ListItem from '~stories/ui/lists/ListItem';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ListItemEmptyFollow = () => {
	return (
		<ListItem>
			<Typography className={cn('capitalize')} children='no follower' />
		</ListItem>
	);
};

export default ListItemEmptyFollow;
