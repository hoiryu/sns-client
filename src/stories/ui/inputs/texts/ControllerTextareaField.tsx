import { TextareaAutosizeProps } from '@mui/material';
import { Controller, ControllerProps, FieldValues, FormState } from 'react-hook-form';
import TextareaField from '~stories/ui/inputs/texts/TextareaField';

interface IProps<T extends FieldValues> extends Omit<ControllerProps<T>, 'render'> {
	formState: FormState<T>;
	fieldProps: TextareaAutosizeProps;
}

/**
 * react-hook-form 용
 */
const ControllerTextareaField = <T extends FieldValues>({
	fieldProps,
	formState,
	name,
	...props
}: IProps<T>) => (
	<Controller
		name={name}
		{...props}
		render={({ field }) => (
			<TextareaField
				{...fieldProps}
				{...field}
				error={!!formState.errors[name]}
				helperText={<>{formState.errors[name]?.message}</>}
				disabled={formState.isSubmitting}
			/>
		)}
	/>
);

export default ControllerTextareaField;
