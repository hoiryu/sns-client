'use client';

import { useEffect } from 'react';

export default function MswWorker() {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'development') return;
		(async () => {
			const { worker } = await import('~/mocks/browser');
			await worker.start({
				onUnhandledRequest: 'bypass',
			});
			console.info('[MSW] started');
		})();
	}, []);

	return null;
}
