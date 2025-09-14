import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

interface IProps extends CircularProgressProps {}

const ProgressCircular = ({ ...props }: IProps) => <CircularProgress {...props} />;

export default ProgressCircular;
