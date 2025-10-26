import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ContainerFollows from '~authenticated/_components/containers/ContainerFollows';
import usersService from '~services/usersService';

const ContainerSuspenseFollows = async () => {
	const queryClient = new QueryClient();

	await usersService.prefetchUsers(queryClient);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ContainerFollows />
		</HydrationBoundary>
	);
};

export default ContainerSuspenseFollows;
