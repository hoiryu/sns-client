import FormSearch from '~components/search/forms/FormSearch';
import ListWindowScrollTrends from '~components/trend/lists/ListWindowScrollTrends';
import Container from '~stories/ui/containers/Container';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const Page = () => {
	return (
		<Container component='section'>
			<FormSearch />
			<Container component='section'>
				<Typography className={cn('p-4')} children='Trends for you' />
				<ListWindowScrollTrends />
			</Container>
		</Container>
	);
};

export default Page;
