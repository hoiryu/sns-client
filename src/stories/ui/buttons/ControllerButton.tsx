'use client';
import { ButtonProps } from '@mui/material';
import { useMemo } from 'react';
import { FieldValues, FormState } from 'react-hook-form';
import Button from '~stories/ui/buttons/Button';

export interface IProps<T extends FieldValues> extends ButtonProps {
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
