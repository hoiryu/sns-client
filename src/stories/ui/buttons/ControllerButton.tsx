import { FieldValues } from 'react-hook-form';
import { IControllerButtonProps } from '~models/ui/button';
import Button from '~stories/ui/buttons/Button';

/**
 * react-hook-form 용
 */
const ControllerButton = <T extends FieldValues>({
	formState,
	...props
}: IControllerButtonProps<T>) => <Button disabled={!formState.isValid} {...props} />;

export default ControllerButton;
