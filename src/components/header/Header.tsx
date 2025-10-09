'use client';
import MemuAccount from '~components/header/MemuAccount';
import Container from '~stories/ui/containers/Container';
import { cn } from '~utils/cn';

const Header = () => (
	<Container component='header' className={cn('flex min-h-20 justify-end p-4')}>
		<MemuAccount />
	</Container>
);

export default Header;
