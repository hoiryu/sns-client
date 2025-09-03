import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { IAutocompleteProps } from '~models/ui/input';

const Autocomplete = ({ ...props }: IAutocompleteProps) => <MuiAutocomplete {...props} />;

export default Autocomplete;
