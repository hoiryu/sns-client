import { Skeleton as MuiSkeleton } from '@mui/material';
import { ISkeletonProps } from '~models/ui/skeleton';

const Skeleton = ({ ...props }: ISkeletonProps) => <MuiSkeleton {...props} />;

export default Skeleton;
