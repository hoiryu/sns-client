import { Controller, FieldValues } from 'react-hook-form';
import { IControllerCheckboxProps } from '~models/ui/input';
import Checkbox from '~stories/ui/inputs/checkboxs/Checkbox';

/**
 * react-hook-form 용
 */
const ControllerCheckbox = <T extends FieldValues>({
	fieldProps,
	formState,
	onChange,
	onBlur,
	...props
}: IControllerCheckboxProps<T>) => (
	<Controller
		{...props}
		render={({ field }) => (
			<Checkbox
				{...field}
				{...fieldProps}
				checked={!!field.value}
				onChange={e => {
					field.onChange(e);
					onChange && onChange();
				}}
				onBlur={() => {
					field.onBlur();
					onBlur && onBlur();
				}}
				disabled={fieldProps?.disabled || formState.isSubmitting}
			/>
		)}
	/>
);

export default ControllerCheckbox;
