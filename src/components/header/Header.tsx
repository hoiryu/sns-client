'use client';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import MemuAccount from '~components/common/header/MemuAccount';
import Container from '~stories/ui/containers/Container';

const Header = () => {
	const pathname = usePathname();

	return (
		<Container component='header' className={cn('flex min-h-20 justify-end p-4')}>
			<MemuAccount />
		</Container>
	);
};

export default Header;
