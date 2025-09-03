import { ITextFieldAutoProps } from '~models/ui/input';
import IconSearch from '~stories/ui/icons/IconSearch';
import Autocomplete from '~stories/ui/inputs/texts/Autocomplete';
import TextField from '~stories/ui/inputs/texts/TextField';
import { cn } from '~utils/cn';

const TextFieldAuto = ({ inputProps, ...props }: ITextFieldAutoProps) => (
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
					aria-label='search'
				/>
			</>
		)}
		{...props}
	/>
);

export default TextFieldAuto;
