import { Controller, FieldValues } from 'react-hook-form';
import { IControllerTextFieldAutoProps } from '~models/ui/input';
import TextFieldAuto from '~stories/ui/inputs/texts/TextFieldAuto';

/**
 * react-hook-form 용
 */
const ControllerTextFieldAuto = <T extends FieldValues>({
	fieldProps,
	formState,
	name,
	...props
}: IControllerTextFieldAutoProps<T>) => (
	<Controller
		name={name}
		{...props}
		render={({ field }) => {
			return (
				<TextFieldAuto
					{...fieldProps}
					inputProps={{
						...field,
						error: !!formState.errors[name],
						helperText: <>{formState.errors[name]?.message}</>,
						disabled: formState.isSubmitting,
					}}
					options={fieldProps?.options || []}
				/>
			);
		}}
	/>
);

export default ControllerTextFieldAuto;
