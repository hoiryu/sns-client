import Container from '~stories/ui/containers/Container';
import ProgressCircular from '~stories/ui/progress/ProgressCircular';
import { cn } from '~utils/cn';

const Loading = () => (
	<Container className={cn('flex w-full items-center justify-center')}>
		<ProgressCircular size={80} />
	</Container>
);

export default Loading;
