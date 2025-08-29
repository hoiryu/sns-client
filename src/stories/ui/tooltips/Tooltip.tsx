import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

interface IProps extends TooltipProps {}

const Tooltip = ({ ...props }: IProps) => <MuiTooltip {...props} />;

export default Tooltip;
