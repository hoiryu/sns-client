import { NextPage } from 'next';
import Link from 'next/link';
import Button from '../stories/ui/buttons/Button';

const NotFound: NextPage = () => {
	return (
		<div>
			<div>이 페이지는 존재하지 않습니다.</div>
			<Button component={Link} href='/home' children='home' />
		</div>
	);
};

export default NotFound;
