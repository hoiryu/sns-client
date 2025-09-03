import Link from 'next/link';
import Button from '~stories/ui/buttons/Button';

const ButtonCreatePost = () => (
	<Button component={Link} scroll={false} href='/compose/post' children='post' />
);

export default ButtonCreatePost;
