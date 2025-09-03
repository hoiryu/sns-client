import { TextField as MuiTextField } from '@mui/material';
import { ITextFieldProps } from '~models/ui/input';

const TextField = ({ error, helperText, ...props }: ITextFieldProps) => (
	<MuiTextField error={error} helperText={!error || helperText} {...props} />
);

export default TextField;
