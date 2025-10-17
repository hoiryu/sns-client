import { FormHelperText, useColorScheme } from '@mui/material';
import Dropzone from 'react-dropzone';
import { IFileFieldProps } from '~models/ui/input';
import Box from '~stories/ui/containers/Box';
import IconUpload from '~stories/ui/icons/IconUpload';
import { cn } from '~utils/cn';

const FileField = ({
	className,
	color = 'primary',
	disabled,
	error,
	helperText,
	...props
}: IFileFieldProps) => (
	<Dropzone disabled={disabled} {...props}>
		{({ getRootProps, getInputProps, acceptedFiles }) => {
			const { ...rootProps } = getRootProps();
			const { mode } = useColorScheme();

			return (
				<Box
					component='section'
					className={cn(
						className,
						'relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border-1 border-dashed border-current',
						{
							'cursor-no-drop': disabled,
							'cursor-pointer': !disabled,
						},
					)}
					sx={{ color: `var(--color-${color}-${mode})` }}
					{...rootProps}
				>
					<IconUpload />
					<input {...getInputProps()} />
					{error && <FormHelperText error children={helperText} />}
				</Box>
			);
		}}
	</Dropzone>
);

export default FileField;
