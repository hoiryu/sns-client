'use client';
import { useRouter } from 'next/navigation';
import FormCreatePost from '~components/post/forms/FormCreatePost';
import Modal from '~stories/ui/modals/Modal';

const ModalCreatePost = () => {
	const router = useRouter();
	const handleClose = () => router.back();

	return (
		<Modal open size='small' disablePortal onClose={handleClose}>
			<FormCreatePost />
		</Modal>
	);
};

export default ModalCreatePost;
