import { Typography as MuiTypography, TypographyProps } from '@mui/material';

interface IProps extends TypographyProps {}

const Text = ({ ...props }: IProps) => <MuiTypography {...props} />;

export default Text;
