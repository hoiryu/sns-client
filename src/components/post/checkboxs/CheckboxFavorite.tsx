import { FieldValues } from 'react-hook-form';
import { IControllerCheckboxProps } from '~models/ui/input';
import IconFavorite from '~stories/ui/icons/IconFavorite';
import IconFavoriteBorder from '~stories/ui/icons/IconFavoriteBorder';
import ControllerCheckbox from '~stories/ui/inputs/checkboxs/ControllerCheckbox';

interface IProps<T extends FieldValues> extends IControllerCheckboxProps<T> {}

const CheckboxFavorite = <T extends FieldValues>({ ...props }: IProps<T>) => (
	<ControllerCheckbox
		{...props}
		fieldProps={{
			icon: <IconFavoriteBorder />,
			checkedIcon: <IconFavorite />,
			...props.fieldProps,
		}}
	/>
);

export default CheckboxFavorite;
