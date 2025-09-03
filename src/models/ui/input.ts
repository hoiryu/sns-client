import {
	AutocompleteProps,
	BaseTextFieldProps,
	CheckboxProps,
	SwitchProps,
	TextareaAutosizeProps,
} from '@mui/material';
import { ReactNode } from 'react';
import { DropzoneProps } from 'react-dropzone';
import { ControllerProps, ControllerRenderProps, FieldValues, FormState } from 'react-hook-form';

/**
 * TextField
 */
export interface ITextFieldProps extends BaseTextFieldProps {}

/**
 * TextField + Controller
 */
export interface IControllerTextFieldProps<T extends FieldValues>
	extends Omit<ControllerProps<T>, 'render'> {
	formState: FormState<T>;
	fieldProps: BaseTextFieldProps;
}

/**
 * TextareaField
 */
export interface ITextareaFieldProps extends TextareaAutosizeProps {
	error?: boolean;
	helperText?: ReactNode;
}

/**
 * TextareaField + Controller
 */
export interface IControllerTextareaFieldProps<T extends FieldValues>
	extends Omit<ControllerProps<T>, 'render'> {
	formState: FormState<T>;
	fieldProps?: TextareaAutosizeProps;
}

/**
 * Autocomplete
 */
export interface IAutocompleteProps extends AutocompleteProps<string, false, true, true> {
	inputProps?: ITextFieldProps;
}

/**
 * Autocomplete + TextField
 */
export interface ITextFieldAutoProps extends Omit<IAutocompleteProps, 'renderInput'> {}

/**
 * Autocomplete + TextField + Controller
 */
export interface IControllerTextFieldAutoProps<T extends FieldValues>
	extends Omit<ControllerProps<T>, 'render'> {
	formState: FormState<T>;
	fieldProps?: ITextFieldAutoProps;
}

/**
 * Checkbox
 */
export interface ICheckboxProps extends CheckboxProps {}

/**
 * Checkbox + Controller
 */
export interface IControllerCheckboxProps<T extends FieldValues>
	extends Omit<ControllerProps<T>, 'render'> {
	onChange?: ControllerRenderProps['onChange'];
	onBlur?: ControllerRenderProps['onBlur'];
	formState: FormState<T>;
	fieldProps?: Omit<ICheckboxProps, 'onChange'>;
}

/**
 * Switch
 */
export interface ISwitchProps extends SwitchProps {}

/**
 * Switch + Controller
 */
export interface IControllerSwitchProps<T extends FieldValues>
	extends Omit<ControllerProps<T>, 'render'> {
	onChange?: ControllerRenderProps['onChange'];
	onBlur?: ControllerRenderProps['onBlur'];
	formState: FormState<T>;
	fieldProps?: ISwitchProps;
}

/**
 * File
 */
export interface IFileFieldProps extends DropzoneProps {
	className?: string;
	color?: BaseTextFieldProps['color'];
	error?: BaseTextFieldProps['error'];
	helperText?: BaseTextFieldProps['helperText'];
}

/**
 * File + Controller
 */
export interface IControllerFileFieldProps<T extends FieldValues>
	extends Omit<ControllerProps<T>, 'render'> {
	formState: FormState<T>;
	fieldProps: IFileFieldProps;
}
