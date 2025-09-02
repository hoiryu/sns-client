import { Controller, ControllerProps, FieldValues, FormState } from 'react-hook-form';
import FileField, { IFileFieldProps } from '~stories/ui/inputs/files/FileField';

interface IProps<T extends FieldValues> extends Omit<ControllerProps<T>, 'render'> {
	formState: FormState<T>;
	fieldProps: IFileFieldProps;
}

/**
 * react-hook-form 용
 */
const ControllerFileField = <T extends FieldValues>({
	fieldProps,
	formState,
	name,
	...props
}: IProps<T>) => {
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
