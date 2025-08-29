import { BaseTextFieldProps } from '@mui/material';
import { Controller, ControllerProps, FieldValues, FormState } from 'react-hook-form';
import TextField from '~stories/ui/inputs/texts/TextField';

interface IProps<T extends FieldValues> extends Omit<ControllerProps<T>, 'render'> {
	formState: FormState<T>;
	fieldProps: BaseTextFieldProps;
}

/**
 * react-hook-form 용
 */
const ControllerTextField = <T extends FieldValues>({
	fieldProps,
	formState,
	name,
	...props
}: IProps<T>) => (
	<Controller
		name={name}
		{...props}
		render={({ field }) => (
			<TextField
				{...fieldProps}
				{...field}
				error={!!formState.errors[name]}
				helperText={<>{formState.errors[name]?.message}</>}
				disabled={formState.isSubmitting}
			/>
		)}
	/>
);

export default ControllerTextField;
