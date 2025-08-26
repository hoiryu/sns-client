'use client';
import { ReactNode, Suspense, use } from 'react';
import { handlers } from '~/mocks/handlers';

const mockingEnabledPromise =
	typeof window !== 'undefined'
		? import('~/mocks/browser').then(async ({ default: worker }) => {
				if (process.env.NODE_ENV === 'production') return;

				await worker.start({
					onUnhandledRequest(request, print) {
						if (request.url.includes('_next')) return;
						// mocking 안한 경우 확인 가능
						// print.warning();
					},
				});

				worker.use(...handlers);

				(module as any).hot?.dispose(() => {
					worker.stop();
				});
				console.log(worker.listHandlers());
			})
		: Promise.resolve();

interface IProps {
	readonly children: ReactNode;
}

export default function ProviderMSW({ children }: IProps) {
	return (
		<Suspense fallback={null}>
			<ProviderWrapperMSW>{children}</ProviderWrapperMSW>
		</Suspense>
	);
}

function ProviderWrapperMSW({ children }: IProps) {
	use(mockingEnabledPromise);
	return children;
}
