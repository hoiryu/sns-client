import { Checkbox as MuiCheckbox } from '@mui/material';
import { ICheckboxProps } from '~models/ui/input';

const Checkbox = ({ ...props }: ICheckboxProps) => <MuiCheckbox {...props} />;

export default Checkbox;
