import { ModalProps, Modal as MuiModal } from '@mui/material';
import { cn } from '~utils/cn';
import Box from '../containers/Box';

type TSize = 'xsmall' | 'small' | 'medium' | 'large';
export const sizes: TSize[] = ['xsmall', 'small', 'medium', 'large'];

interface IProps extends ModalProps {
	size?: TSize;
}

const Modal = ({ children, size = 'medium', ...props }: IProps) => (
	<MuiModal {...props}>
		<Box
			className={cn(
				'bg-light dark:bg-dark absolute top-1/2 left-1/2 w-8/10 -translate-1/2 rounded-lg p-5 shadow-2xl',
				{
					'xl:w-3/10': size === 'xsmall',
					'xl:w-5/10': size === 'small',
					'xl:w-7/10': size === 'medium',
					'xl:w-9/10': size === 'large',
				},
			)}
		>
			{children}
		</Box>
	</MuiModal>
);

export default Modal;
