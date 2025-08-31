import { AutocompleteProps, Autocomplete as MuiAutocomplete } from '@mui/material';
import { ITextFieldProps } from '~stories/ui/inputs/texts/TextField';

export interface IAutocompleteProps extends AutocompleteProps<string, false, true, true> {
	inputProps?: ITextFieldProps;
}

const Autocomplete = ({ ...props }: IAutocompleteProps) => <MuiAutocomplete {...props} />;

export default Autocomplete;
