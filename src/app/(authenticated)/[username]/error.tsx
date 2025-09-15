'use client';

import Button from '~stories/ui/buttons/Button';
import Container from '~stories/ui/containers/Container';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	return (
		<Container className='space-y-3 p-6'>
			<h2 className='text-lg font-semibold'>문제가 발생했어요</h2>
			<p className='text-sm text-zinc-500'>{error.message}</p>
			<Button color='error' onClick={() => reset()} children='try again' />
		</Container>
	);
}
