import { Typography as MuiTypography, TypographyProps } from '@mui/material';

interface IProps extends TypographyProps {}

/**
 * text-xs
 * text-sm
 * text-base
 * text-lg
 * text-xl
 * text-2xl
 * text-3xl
 * text-4xl
 * text-5xl
 * text-6xl
 * text-7xl
 * text-8xl
 * text-9xl
 */
const Typography = ({ ...props }: IProps) => <MuiTypography {...props} />;

export default Typography;
