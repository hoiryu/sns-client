'use client';
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const ProviderQuery = ({ children, ...props }: Omit<QueryClientProviderProps, 'client'>) => {
	return (
		<QueryClientProvider client={queryClient} {...props}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default ProviderQuery;
