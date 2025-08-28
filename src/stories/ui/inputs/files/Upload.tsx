import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ButtonProps, styled } from '@mui/material';
import { ChangeEvent } from 'react';
import Button from '~stories/ui/buttons/Button';

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

interface IProps extends Omit<ButtonProps, 'value' | 'onChange'> {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	htmlFor?: string;
	multiple?: boolean;
}

const Upload = ({ name, onChange, multiple, ...props }: IProps) => {
	return (
		<Button
			component='label'
			role={undefined}
			variant='contained'
			htmlFor={name}
			tabIndex={-1}
			startIcon={<CloudUploadIcon />}
			{...props}
		>
			Upload files
			<VisuallyHiddenInput type='file' id={name} multiple={multiple} onChange={onChange} />
		</Button>
	);
};

export default Upload;

{
	/* <Controller
					name='image'
					control={control}
					render={({ field: { onChange, value } }) => {
						return (
							<Dropzone multiple onDrop={acceptedFiles => onChange(acceptedFiles)}>
								{({ getRootProps, getInputProps }) => (
									<section>
										<div {...getRootProps()}>
											<input {...getInputProps()} />
											<p>
												Drag 'n' drop some files here, or click to select
												files
											</p>
										</div>
										<ul>
											{value.map((file, idx) => (
												<li key={idx}>{file.name}</li>
											))}
										</ul>
									</section>
								)}
							</Dropzone>
						);
					}}
				/>
				{errors &&
					errors.image &&
					(errors.image as { message: string }[]).map(
						err => err?.message && <p className='text-red-500'>{err.message}</p>,
					)} */
}
