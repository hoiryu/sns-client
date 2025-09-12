import ListItem from '~stories/ui/lists/ListItem';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const ListItemEmptyPost = () => {
	return (
		<ListItem>
			<Typography className={cn('capitalize')} children='no search' />
		</ListItem>
	);
};

export default ListItemEmptyPost;
