import { TabProps } from '@mui/material';
import { LinkProps } from 'next/link';

export type TTabProps = TabProps & Partial<LinkProps>;
