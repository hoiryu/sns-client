import { FormHelperText, TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import cn from 'classnames';
import { ReactNode } from 'react';
import Box from '~stories/ui/containers/Box';
interface IProps extends TextareaAutosizeProps {
	error?: boolean;
	helperText?: ReactNode;
}

const TextareaField = ({ error, helperText, className, ...props }: IProps) => (
	<Box className={cn('relative')}>
		<TextareaAutosize className={cn('w-full', className)} {...props} />
		{error && helperText && (
			<FormHelperText error required={props.required} children={helperText} />
		)}
	</Box>
);

export default TextareaField;
