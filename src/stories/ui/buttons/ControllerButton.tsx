'use client';
import { useMemo } from 'react';
import { FieldValues, FormState } from 'react-hook-form';
import { TButtonProps } from '~models/ui/button';
import Button from '~stories/ui/buttons/Button';

export interface IProps<T extends FieldValues> extends TButtonProps {
	formState: FormState<T>;
}

/**
 * react-hook-form 용
 */
const ControllerButton = <T extends FieldValues>({ formState, ...props }: IProps<T>) => {
	const isDisabled = useMemo(() => !formState.isValid, [formState.isValid]);

	return <Button disabled={isDisabled} {...props} />;
};

export default ControllerButton;
