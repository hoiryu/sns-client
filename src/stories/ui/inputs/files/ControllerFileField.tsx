import { Controller, FieldValues } from 'react-hook-form';
import { IControllerFileFieldProps } from '~models/ui/input';
import FileField from '~stories/ui/inputs/files/FileField';

/**
 * react-hook-form 용
 */
const ControllerFileField = <T extends FieldValues>({
	fieldProps,
	formState,
	name,
	...props
}: IControllerFileFieldProps<T>) => {
	return (
		<Controller
			name={name}
			{...props}
			render={({ field: { onChange } }) => (
				<FileField
					{...fieldProps}
					onDrop={acceptedFiles => onChange(acceptedFiles)}
					error={!!formState.errors[name]}
					helperText={
						Array.isArray(formState.errors[name]) ? (
							<>{formState.errors[name]?.at(-1).message}</>
						) : (
							<>{formState.errors[name]?.message}</>
						)
					}
					disabled={formState.isSubmitting}
				/>
			)}
		/>
	);
};

export default ControllerFileField;
