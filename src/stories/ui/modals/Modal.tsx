import { ModalProps, Modal as MuiModal } from '@mui/material';
import cn from 'classnames';
import Box from '../containers/Box';

type TSize = 'small' | 'medium' | 'large';
export const sizes: TSize[] = ['small', 'medium', 'large'];

interface IProps extends ModalProps {
	size: TSize;
}

const Modal = ({ children, size = 'medium', ...props }: IProps) => (
	<MuiModal {...props}>
		<Box
			className={cn('absolute top-1/2 left-1/2 -translate-1/2 rounded-md p-2 shadow-2xl', {
				'w-5/10': size === 'small',
				'w-7/10': size === 'medium',
				'w-9/10': size === 'large',
			})}
			sx={[
				theme =>
					theme.applyStyles('light', {
						backgroundColor: 'var(--color-bg-light)',
					}),
				theme =>
					theme.applyStyles('dark', {
						backgroundColor: 'var(--color-bg-dark)',
					}),
			]}
		>
			{children}
		</Box>
	</MuiModal>
);

export default Modal;
