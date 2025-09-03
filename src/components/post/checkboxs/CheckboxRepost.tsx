import { FieldValues } from 'react-hook-form';
import { IControllerCheckboxProps } from '~models/ui/input';
import IconRepost from '~stories/ui/icons/IconRepost';
import ControllerCheckbox from '~stories/ui/inputs/checkboxs/ControllerCheckbox';

interface IProps<T extends FieldValues> extends IControllerCheckboxProps<T> {}

const CheckboxRepost = <T extends FieldValues>({ ...props }: IProps<T>) => (
	<ControllerCheckbox
		fieldProps={{
			icon: <IconRepost />,
			checkedIcon: <IconRepost />,
			...props.fieldProps,
		}}
		{...props}
	/>
);

export default CheckboxRepost;
