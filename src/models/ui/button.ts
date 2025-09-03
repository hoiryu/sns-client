import { ButtonProps, IconButtonProps } from '@mui/material';
import { LinkProps } from 'next/link';
import { FieldValues, FormState } from 'react-hook-form';

/**
 * Button
 */
export type TButtonProps = ButtonProps & Partial<LinkProps>;

/**
 * Button + Controller
 */
export interface IControllerButtonProps<T extends FieldValues> extends TButtonProps {
	formState: FormState<T>;
}

/**
 * ButtonIcon
 */
export type TButtonIconProps = IconButtonProps & Partial<LinkProps>;
