import { Controller, FieldValues } from 'react-hook-form';
import { IControllerTextareaFieldProps } from '~models/ui/input';
import TextareaField from '~stories/ui/inputs/texts/TextareaField';

/**
 * react-hook-form 용
 */
const ControllerTextareaField = <T extends FieldValues>({
	fieldProps,
	formState,
	name,
	...props
}: IControllerTextareaFieldProps<T>) => (
	<Controller
		name={name}
		{...props}
		render={({ field }) => (
			<TextareaField
				{...field}
				{...fieldProps}
				error={!!formState.errors[name]}
				helperText={<>{formState.errors[name]?.message}</>}
				disabled={formState.isSubmitting}
			/>
		)}
	/>
);

export default ControllerTextareaField;
