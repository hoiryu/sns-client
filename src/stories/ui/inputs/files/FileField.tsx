import { BaseTextFieldProps, FormHelperText, useColorScheme } from '@mui/material';
import cn from 'classnames';
import Dropzone, { DropzoneOptions } from 'react-dropzone';
import Box from '~stories/ui/containers/Box';
import IconUpload from '~stories/ui/icons/IconUpload';
import Typography from '~stories/ui/typographys/Typography';

export const colors: BaseTextFieldProps['color'][] = [
	'primary',
	'secondary',
	'error',
	'info',
	'success',
	'warning',
];

export interface IFileFieldProps extends DropzoneOptions {
	color?: BaseTextFieldProps['color'];
	error?: BaseTextFieldProps['error'];
	helperText?: BaseTextFieldProps['helperText'];
}

const FileField = ({
	color = 'primary',
	disabled,
	error,
	helperText,
	...props
}: IFileFieldProps) => (
	<Dropzone disabled={disabled} {...props}>
		{({ getRootProps, getInputProps, acceptedFiles }) => {
			const { className, ...rootProps } = getRootProps();
			const { mode } = useColorScheme();

			return (
				<Box
					component='section'
					className={cn(
						className,
						'relative flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border-1 border-dashed border-current px-2 py-6',
						{
							'cursor-no-drop': disabled,
							'hover:animate-jelly cursor-pointer': !disabled,
						},
					)}
					sx={{ color: `var(--color-${color}-${mode})` }}
					{...rootProps}
				>
					<IconUpload />
					<input {...getInputProps()} />
					{!!acceptedFiles.length && (
						<ul
							className={cn(
								'absolute bottom-1 left-1/2 flex w-full -translate-x-1/2 flex-wrap justify-center gap-2',
							)}
						>
							{acceptedFiles.map(f => (
								<li key={`${f.name}-${f.size}-${f.lastModified}`}>
									<Typography>{f.name}</Typography>
								</li>
							))}
						</ul>
					)}
					{error && helperText && <FormHelperText error>{helperText}</FormHelperText>}
				</Box>
			);
		}}
	</Dropzone>
);

export default FileField;

{
	/* 
	{errors &&
		errors.image &&
		(errors.image as { message: string }[]).map(
			err => err?.message && <p className='text-red-500'>{err.message}</p>,
		)} */
}
