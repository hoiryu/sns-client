import { FieldValues } from 'react-hook-form';
import { IControllerCheckboxProps } from '~models/ui/input';
import IconChat from '~stories/ui/icons/IconChat';
import IconChatBorder from '~stories/ui/icons/IconChatBorder';
import ControllerCheckbox from '~stories/ui/inputs/checkboxs/ControllerCheckbox';

interface IProps<T extends FieldValues> extends IControllerCheckboxProps<T> {}

const CheckboxChat = <T extends FieldValues>({ ...props }: IProps<T>) => (
	<ControllerCheckbox
		fieldProps={{
			icon: <IconChatBorder />,
			checkedIcon: <IconChat />,
			...props.fieldProps,
		}}
		{...props}
	/>
);

export default CheckboxChat;
