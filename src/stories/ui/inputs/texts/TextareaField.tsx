import { FormHelperText, TextareaAutosize } from '@mui/material';
import { ITextareaFieldProps } from '~models/ui/input';
import Box from '~stories/ui/containers/Box';
import { cn } from '~utils/cn';

const TextareaField = ({ error, helperText, className, ...props }: ITextareaFieldProps) => (
	<Box className={cn('relative')}>
		<TextareaAutosize className={cn('w-full', className)} {...props} />
		{error && helperText && (
			<FormHelperText error required={props.required} children={helperText} />
		)}
	</Box>
);

export default TextareaField;
