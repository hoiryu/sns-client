import { Controller, FieldValues } from 'react-hook-form';
import { IControllerTextFieldProps } from '~models/ui/input';
import TextField from '~stories/ui/inputs/texts/TextField';

/**
 * react-hook-form 용
 */
const ControllerTextField = <T extends FieldValues>({
	fieldProps,
	formState,
	name,
	...props
}: IControllerTextFieldProps<T>) => (
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
