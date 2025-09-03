import { FormHelperText, useColorScheme } from '@mui/material';
import cn from 'classnames';
import Dropzone from 'react-dropzone';
import { IFileFieldProps } from '~models/ui/input';
import Box from '~stories/ui/containers/Box';
import IconUpload from '~stories/ui/icons/IconUpload';
import Typography from '~stories/ui/typographys/Typography';

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
					{!acceptedFiles.length && <IconUpload />}
					<input {...getInputProps()} />
					{!!acceptedFiles.length && (
						<ul
							className={cn(
								'absolute top-1/2 left-1/2 flex w-full -translate-1/2 flex-wrap justify-center gap-2',
							)}
						>
							{acceptedFiles.map(f => (
								<li key={`${f.name}-${f.size}-${f.lastModified}`}>
									<Typography>{f.name}</Typography>
								</li>
							))}
						</ul>
					)}
					{error && <FormHelperText error children={helperText} />}
				</Box>
			);
		}}
	</Dropzone>
);

export default FileField;
