import { Controller, FieldValues } from 'react-hook-form';
import { IControllerSwitchProps } from '~models/ui/input';
import Switch from '~stories/ui/inputs/switchs/Switch';

/**
 * react-hook-form 용
 */
const ControllerSwitch = <T extends FieldValues>({
	fieldProps,
	formState,
	onChange,
	onBlur,
	...props
}: IControllerSwitchProps<T>) => (
	<Controller
		{...props}
		render={({ field }) => (
			<Switch
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

export default ControllerSwitch;
