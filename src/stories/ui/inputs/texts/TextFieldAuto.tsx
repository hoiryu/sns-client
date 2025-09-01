import cn from 'classnames';
import IconSearch from '~stories/ui/icons/IconSearch';
import Autocomplete, { IAutocompleteProps } from '~stories/ui/inputs/texts/Autocomplete';
import TextField, { ITextFieldProps } from '~stories/ui/inputs/texts/TextField';

interface IProps extends Omit<IAutocompleteProps, 'renderInput'> {}
export const variants: ITextFieldProps['variant'][] = ['standard', 'outlined', 'filled'];
export const sizes: ITextFieldProps['size'][] = ['small', 'medium'];
export const colors: ITextFieldProps['color'][] = [
	'primary',
	'secondary',
	'error',
	'info',
	'success',
	'warning',
];

const TextFieldAuto = ({ inputProps, ...props }: IProps) => (
	<Autocomplete
		classes={{
			root: cn('group relative'),
			inputRoot: cn('rounded-2xl pl-7'),
		}}
		disableClearable
		color={inputProps?.color || 'primary'}
		renderInput={renderInputProps => (
			<>
				<IconSearch className={cn('absolute top-1/2 left-2 -translate-y-1/2')} />
				<TextField
					{...renderInputProps}
					{...inputProps}
					type='search'
					autoComplete={'off'}
					aria-label='search'
				/>
			</>
		)}
		{...props}
	/>
);

export default TextFieldAuto;
