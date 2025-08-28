import { Typography as MuiTypography, TypographyProps } from '@mui/material';

interface IProps extends TypographyProps {}

const Typography = ({ ...props }: IProps) => <MuiTypography {...props} />;

export default Typography;
