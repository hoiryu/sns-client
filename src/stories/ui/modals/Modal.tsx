import { ModalProps, Modal as MuiModal } from '@mui/material';
import cn from 'classnames';
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
				'absolute top-1/2 left-1/2 w-7/10 -translate-1/2 rounded-lg p-5 shadow-2xl',
				{
					'lg:w-3/10': size === 'xsmall',
					'lg:w-5/10': size === 'small',
					'lg:w-7/10': size === 'medium',
					'lg:w-9/10': size === 'large',
				},
			)}
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
